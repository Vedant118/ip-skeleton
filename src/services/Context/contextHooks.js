import { useContext } from "react";
import { Context } from "./contextProvider";

const useContextHook=()=>{
  const {  globalState,
		storeDataInGlobalState,
		getDataFromGlobalState,
		deleteDataFromGlobalState,
		updateDataInGlobalState,
		clearAllDataFromGlobalState, } = useContext(Context);
		
		return {
			globalState,
			storeDataInGlobalState,
			getDataFromGlobalState,
			deleteDataFromGlobalState,
			updateDataInGlobalState,
			clearAllDataFromGlobalState,
		}
}

export default useContextHook;
