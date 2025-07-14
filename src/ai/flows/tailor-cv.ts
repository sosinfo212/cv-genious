// src/ai/flows/tailor-cv.ts
'use server';
/**
 * @fileOverview This file defines a Genkit flow for tailoring a CV and generating a cover letter based on a job description link and an uploaded CV.
 *
 * - tailorCv - A function that takes a job link and CV data URI, then returns a tailored CV and cover letter.
 * - TailorCvInput - The input type for the tailorCv function.
 * - TailorCvOutput - The return type for the tailorCv function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorCvInputSchema = z.object({
  jobLink: z.string().optional().describe('A link to the job description.'),
  jobDescription: z.string().optional().describe('The job description text.'),
  cvDataUri: z
    .string()
    .describe(
      "The user's existing CV, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type TailorCvInput = z.infer<typeof TailorCvInputSchema>;

const TailorCvOutputSchema = z.object({
  tailoredCv: z.string().describe('The tailored CV content in Markdown format.'),
  coverLetter: z.string().describe('The generated cover letter content in Markdown format.'),
});
export type TailorCvOutput = z.infer<typeof TailorCvOutputSchema>;

export async function tailorCv(input: TailorCvInput): Promise<TailorCvOutput> {
  return tailorCvFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailorCvPrompt',
  input: {schema: TailorCvInputSchema},
  output: {schema: TailorCvOutputSchema},
  prompt: `You are an expert resume writer and career advisor. A user will provide you with their existing CV and either a link to a job description or the job description text itself.

  Your task is to:
  1. Analyze the job description from the provided link or text to identify the key skills, experience, and qualifications required for the position. Prioritize the job description text if both are provided.
  2. Review the user's CV and identify areas where it can be improved to better match the job description. This may involve re-wording existing content, adding new sections, or highlighting specific achievements.
  3. Generate a tailored CV that is optimized for the specific job description. The tailored CV should be ATS-friendly and highlight the user's most relevant skills and experience. The output should be in Markdown format.
  4. Generate a cover letter that is tailored to the specific job description. The cover letter should introduce the user, highlight their key qualifications, and express their interest in the position. The output should be in Markdown format.

  {{#if jobDescription}}
  Job Description: {{{jobDescription}}}
  {{else}}
  Job Description Link: {{{jobLink}}}
  {{/if}}
  
  User's CV: {{media url=cvDataUri}}
`,
});

const tailorCvFlow = ai.defineFlow(
  {
    name: 'tailorCvFlow',
    inputSchema: TailorCvInputSchema,
    outputSchema: TailorCvOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
