import { FILE_DATA_AUDIO } from '../Cont/Const';

const initialState: any = {
  audioFile: [],
};

export const FileAudioListData = (state = initialState, action: any) => {
  const { type, data } = action;
  switch (type) {
    case FILE_DATA_AUDIO:
      return (state = data);
    default:
      return state;
  }
};
