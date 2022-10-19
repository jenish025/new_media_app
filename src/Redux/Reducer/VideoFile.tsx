import { FILE_DATA, FILE_DATA_VIDEO } from '../Cont/Const';

const initialState: any = {
  videoFile: [],
};

export const FileVideoListData = (state = initialState, action: any) => {
  const { type, data } = action;
  switch (type) {
    case FILE_DATA_VIDEO:
      return (state = data);
    default:
      return state;
  }
};
