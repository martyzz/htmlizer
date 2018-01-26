import {
  LOADING_UPDATE,
  NOT_FOUND_UPDATE,
  SAVING_UPDATE
} from "../types/persistanceTypes";

import { visualBranchesUpdate } from "./visualActions";
import { codeUpdateFromBranches } from "./codeActions";

import { push } from "react-router-redux";

import { create, read, update } from "../api";

const loadingUpdate = isLoading => ({ type: LOADING_UPDATE, isLoading });
const savingUpdate = isSaving => ({ type: SAVING_UPDATE, isSaving });
const notFoundUpdate = notFound => ({ type: NOT_FOUND_UPDATE, notFound });

export const persistanceLoadForParams = ({
  identifier,
  version = 1
}) => dispatch => {
  if (identifier) {
    read(identifier, version).then(({ match, branches }) => {
      if (match) {
        dispatch(visualBranchesUpdate(branches));
        dispatch(codeUpdateFromBranches(branches));
      } else {
        dispatch(notFoundUpdate(true));
      }
      dispatch(loadingUpdate(false));
    });
  } else {
    dispatch(loadingUpdate(false));
  }
};

export const persistanceSaveForParams = ({ identifier }) => (
  dispatch,
  getState
) => {
  dispatch(savingUpdate(true));

  const { visual: { branches } } = getState();

  if (identifier) {
    update(identifier, branches).then(version => {
      if (version) {
        dispatch(push(`/${identifier}/${version}`));
        dispatch(savingUpdate(false));
      } else {
        console.error("An error has occured while updating 'branches'");
      }
    });
  } else {
    create(branches).then(identifier => {
      if (identifier) {
        dispatch(push(`/${identifier}`));
        dispatch(savingUpdate(false));
      } else {
        console.error("An error has occured while creating 'branches'");
      }
    });
  }
};
