'use server';

import { tailorCv, TailorCvOutput } from '@/ai/flows/tailor-cv';
import { z } from 'zod';

const FormSchema = z.object({
  jobLink: z.string().url({ message: 'Please enter a valid URL.' }),
  cv: z.any().refine(file => file?.size > 0, 'CV is required.'),
});

export type State = {
  message?: string | null;
  errors?: {
    jobLink?: string[];
    cv?: string[];
  };
  data?: TailorCvOutput;
};

export async function handleCvTailoring(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    jobLink: formData.get('jobLink'),
    cv: formData.get('cv'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Process.',
    };
  }

  const { jobLink, cv: file } = validatedFields.data;

  try {
    const cvBuffer = await file.arrayBuffer();
    const cvBase64 = Buffer.from(cvBuffer).toString('base64');
    const cvDataUri = `data:${file.type};base64,${cvBase64}`;

    const result = await tailorCv({
      jobLink,
      cvDataUri,
    });
    
    return { message: 'Successfully generated documents.', data: result };
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred. Please try again.' };
  }
}
