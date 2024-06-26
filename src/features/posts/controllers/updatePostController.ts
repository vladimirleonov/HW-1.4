import {Request, Response} from 'express'
import {InputPostType, OutputPostType} from "../../../input-output-types/post-types"
import {HTTP_CODES} from "../../../settings"
import {postMongoRepository} from '../repository/postMongoRepository'
import {ObjectId} from 'mongodb'
import {InputIdParamType} from "../../../input-output-types/common-types";

export const updatePostController = async (req: Request<InputIdParamType, OutputPostType, InputPostType>, res: Response<OutputPostType>) => {
    try {
        const updatedInfo = await postMongoRepository.update(new ObjectId(req.params.id), req.body)

        if (!updatedInfo.id && updatedInfo.error) {
            res.status(HTTP_CODES.NOT_FOUND).send()
            return
        }

        res.status(HTTP_CODES.NO_CONTENT).send()
    } catch (err) {
        res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send()
    }
}