import { UPDATE_SELECTED_ID, UPDATE_BRANCHES } from "../types/visualTypes";

import codeToBranches from "../utilities/converters/codeToBranches";
import branchRemove from "../utilities/branches/branchRemove";
import branchCopy from "../utilities/branches/branchCopy";
import branchAttributeUpdate from "../utilities/branches/branchAttributeUpdate";
import branchContentUpdate from "../utilities/branches/branchContentUpdate";
import branchTagNameUpdate from "../utilities/branches/branchTagNameUpdate";

import { codeUpdateFromBranches } from "./codeActions";

import { appendEmptyAttributes } from "../utilities/branches/emptyAttributes";

export const visualBranchesUpdate = updatedBranches => {
  const branches = appendEmptyAttributes(updatedBranches);

  return {
    type: UPDATE_BRANCHES,
    branches
  };
};

export const visualSelectedIdUpdate = selectedId => {
  return {
    type: UPDATE_SELECTED_ID,
    selectedId
  };
};

const updateBothFromBranches = branches => dispatch => {
  dispatch(visualBranchesUpdate(branches));
  dispatch(codeUpdateFromBranches(branches));
};

export const visualBranchesUpdateFromCode = code => (dispatch, getState) => {
  const { visual: { branches: oldBranches } } = getState();
  const branches = codeToBranches(code, oldBranches);

  dispatch(visualBranchesUpdate(branches));
};

export const visualBranchesRemove = id => (dispatch, getState) => {
  const { visual: { branches: oldBranches } } = getState();
  const branches = branchRemove(oldBranches, id);

  dispatch(updateBothFromBranches(branches));
};

export const visualBranchesCopy = id => (dispatch, getState) => {
  const { visual: { branches: oldBranches } } = getState();
  const branches = branchCopy(oldBranches, id);

  dispatch(updateBothFromBranches(branches));
};

export const visualBranchesAttributesUpdate = (
  branchId,
  attributeIndex,
  updatedAttribute
) => (dispatch, getState) => {
  const { visual: { branches: oldBranches } } = getState();

  const branches = branchAttributeUpdate(
    oldBranches,
    branchId,
    attributeIndex,
    updatedAttribute
  );

  dispatch(updateBothFromBranches(branches));
};

export const visualBranchesContentsUpdate = (branchId, updatedContent) => (
  dispatch,
  getState
) => {
  const { visual: { branches: oldBranches } } = getState();
  const branches = branchContentUpdate(oldBranches, branchId, updatedContent);

  dispatch(updateBothFromBranches(branches));
};

export const visualBranchesTagNameUpdate = (branchId, updatedTagName) => (
  dispatch,
  getState
) => {
  const { visual: { branches: oldBranches } } = getState();
  const branches = branchTagNameUpdate(oldBranches, branchId, updatedTagName);

  dispatch(updateBothFromBranches(branches));
};
