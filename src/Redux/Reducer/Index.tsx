import { combineReducers } from 'redux';
import { FileAudioListData } from './AudioFile';
import { FileVideoListData } from './VideoFile';

const rootReducer = combineReducers({
  FileVideoListData: FileVideoListData,
  FileAudioListData: FileAudioListData,
});
export type AppliactionState = ReturnType<typeof rootReducer>;
export { rootReducer };
