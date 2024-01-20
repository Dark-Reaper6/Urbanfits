import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import mongoose from "mongoose"
import StandardApi from "@/middlewares/standard_api";

const DeleteS3Object = async (req, res) => StandardApi(req, res, { method: "PUT" }, async () => {
    const { object_url, user_id } = req.query;
    if (!object_url || !mongoose.Types.ObjectId.isValid(user_id)) return res.status(400).json({ success: false, msg: "A valid `object_url` and `user_id` query parameters for object deletion are required." })

    const client = new S3Client({
        region: process.env.NEXT_PUBLIC_AWS_REGION,
        credentials: {
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
        }
    });

    const deletecommand = new DeleteObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
        Key: object_url,
    });
    const data = await client.send(deletecommand);

    return res.status(200).json({
        success: true,
        msg: "Object deleted successfully.",
        data
    })
})
export default DeleteS3Object