import * as docx from 'docx';
import { TemplateContext } from '../file-generator';

export default async function renderDocx(context: TemplateContext): Promise<Blob> {
  const meetings = context.meetings.map((meeting) => new docx.Paragraph({
    heading: docx.HeadingLevel.HEADING_3,
    text: meeting,
  }));
  const doc = new docx.Document({
    sections: [
      {
        children: [
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            text: `Course Syllabus - ${context.coursename}`,
          }),
          new docx.Paragraph(context.introduction),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_2,
            text: 'Class Meetings',
          }),
          ...meetings,
        ],
      },
    ],
  });
  return docx.Packer.toBlob(doc);
}
