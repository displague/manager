import { pathOr } from 'ramda';
import { getImages } from "src/services/images";
import { ThunkActionCreator } from 'src/store/types';
import { getAll } from "src/utilities/getAll";
import { getImagesFailure, getImagesSuccess } from './image.actions';

export const requestImages: ThunkActionCreator<Promise<Linode.Image[]>> = () => (dispatch) => {
  const getAllImages = getAll<Linode.Image>(getImages);

  return getAllImages()
    .then(({ data }) => {
      dispatch(getImagesSuccess(data))
      return data;
    })
    .catch((err) => {
      const ApiError = pathOr(
        [{ reason: "There was an error retrieving your Images." }],
        ['response', 'data', 'errors'],
        err
      )
      dispatch(getImagesFailure(ApiError))
      return err;
    })
};