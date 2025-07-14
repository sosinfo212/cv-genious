'use server';

import { tailorCv, TailorCvOutput } from '@/ai/flows/tailor-cv';
import { z } from 'zod';

const FormSchema = z.object({
  jobLink: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  jobDescription: z.string().optional(),
  cv: z.any().refine(file => file?.size > 0, 'CV is required.'),
}).refine(data => data.jobLink || data.jobDescription, {
    message: 'Either a Job Post Link or a Job Description is required.',
    path: ['jobLink'], // or provide a path to a custom field
});


export type State = {
  message?: string | null;
  errors?: {
    jobLink?: string[];
    jobDescription?: string[];
    cv?: string[];
  };
  data?: TailorCvOutput;
};

export async function handleCvTailoring(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    jobLink: formData.get('jobLink'),
    jobDescription: formData.get('jobDescription'),
    cv: formData.get('cv'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Process.',
    };
  }

  const { jobLink, jobDescription, cv: file } = validatedFields.data;

  try {
    const cvBuffer = await file.arrayBuffer();
    const cvBase64 = Buffer.from(cvBuffer).toString('base64');
    const cvDataUri = `data:${file.type};base64,${cvBase64}`;

    const result = await tailorCv({
      jobLink,
      jobDescription,
      cvDataUri,
    });
    
    return { message: 'Successfully generated documents.', data: result };
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred. Please try again.' };
  }
}
