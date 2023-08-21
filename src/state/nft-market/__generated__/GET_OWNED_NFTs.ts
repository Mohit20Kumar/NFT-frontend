/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_OWNED_NFTs
// ====================================================

export interface GET_OWNED_NFTs_nfts {
  __typename: "NFT";
  id: string;
  from: any;
  to: any;
  tokenURI: string;
  price: any;
}

export interface GET_OWNED_NFTs {
  nfts: GET_OWNED_NFTs_nfts[];
}

export interface GET_OWNED_NFTsVariables {
  owner?: string | null;
}
