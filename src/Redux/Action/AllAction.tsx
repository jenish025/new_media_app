import { FILE_DATA_AUDIO, FILE_DATA_VIDEO } from '../Cont/Const';

export const FileVideoListData: any = (videoFile: any) => {
  return {
    type: FILE_DATA_VIDEO,
    data: videoFile,
  };
};

export const FileAudioListData: any = (audioFile: any) => {
  return {
    type: FILE_DATA_AUDIO,
    data: audioFile,
  };
};

