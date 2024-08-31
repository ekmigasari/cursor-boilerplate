// import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

// export const s3Client = new S3Client({
//   region: "apac",
//   endpoint: process.env.R2_ENDPOINT,
//   credentials: {
//     accessKeyId: process.env.R2_ACCESS_KEY_ID,
//     secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
//   },
// });

// interface UploadFileArgs {
//   key: string;
//   folder: string;
//   body: File | Uint8Array;
// }

// export async function uploadFile(args: UploadFileArgs) {
//   try {
//     // 1. Prepare the file according to AWS/R2 format
//     const buffer = args.body instanceof File ? Buffer.from(await args.body.arrayBuffer()) : args.body;
//     const contentType = args.body instanceof File ? "image/png" : "application/pdf";

//     // 2. Send command
//     const data = await s3Client.send(
//       new PutObjectCommand({
//         Bucket: process.env.R2_BUCKET_NAME,
//         Key: `${args.folder}/${args.key}`,
//         ContentType: contentType,
//         Body: buffer,
//       }),
//     );

//     return { success: true, data };
//   } catch (error) {
//     return { success: false, error };
//   }
// }

// interface EditFileArgs {
//   key: string;
//   folder: string;
//   body: File | Uint8Array;
//   oldKey: string;
// }

// export async function editFile(args: EditFileArgs) {
//   // 1. Prepare the file according to AWS/R2 format
//   const buffer = args.body instanceof File ? Buffer.from(await args.body.arrayBuffer()) : args.body;
//   const contentType = args.body instanceof File ? "image/png" : "application/pdf";

//   // 2. Delete the old file if it exists
//   if (args.oldKey) {
//     try {
//       await s3Client.send(
//         new DeleteObjectCommand({
//           Bucket: process.env.R2_BUCKET_NAME,
//           Key: `${args.folder}/${args.oldKey}`,
//         }),
//       );
//       console.log("Old file deleted successfully");
//     } catch (error) {
//       console.log("Error deleting old file:", error);
//     }
//   }

//   // 3. Upload the new file
//   try {
//     await s3Client.send(
//       new PutObjectCommand({
//         Bucket: process.env.R2_BUCKET_NAME,
//         Key: `${args.folder}/${args.key}`,
//         ContentType: contentType,
//         Body: buffer,
//       }),
//     );
//     console.log("New file uploaded successfully");
//   } catch (error) {
//     console.log("Error uploading new file:", error);
//     throw error;
//   }
// }

// interface DeleteFileArgs {
//   key: string;
//   folder: string;
// }

// export async function deleteFile(args: DeleteFileArgs) {
//   try {
//     await s3Client.send(
//       new DeleteObjectCommand({
//         Bucket: process.env.R2_BUCKET_NAME,
//         Key: `${args.folder}/${args.key}`,
//       }),
//     );
//     console.log("Deleted successfully");
//   } catch (error) {
//     console.log("Error deleting file:", error);
//   }
// }
