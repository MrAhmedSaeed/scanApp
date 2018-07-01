
import ImagePicker from 'react-native-image-picker';
import { SCAN_INPROGRESS, SCAN_SUCCESS }
from './actionTypes';
import { ScanCard } from '../source/scaning'; 

const options = {
  quality: 1.0,
  storageOptions: {
    skipBackup: true
  }
};

export const scanSuccess = (result) => (
 {
    type: SCAN_SUCCESS,
    loading: false,
    scanResult: result
  }   
);


export const scanInProgress = () => (
  {
    type: SCAN_INPROGRESS,
    loading: true
  }
);  

export const onScanSubmit = () => (
  (dispatch) => {
    dispatch(scanInProgress());
      //select photo
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel || response.error) {
        dispatch(scanInProgress(''));
      } else {
        //scaning
          ScanCard(response.path).then(res => {
            dispatch(scanSuccess(res.result));
          });
        }
    });
  }
);

