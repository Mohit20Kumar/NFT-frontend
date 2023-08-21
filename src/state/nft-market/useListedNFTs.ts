
import {gql,useQuery} from "@apollo/client"
import useSigner from "../signer";
import { GET_OWNED_NFTs, GET_OWNED_NFTsVariables, GET_OWNED_NFTs_nfts } from "./__generated__/GET_OWNED_NFTs";
import { NFT } from "./interfaces";
import { ethers } from "ethers";
import { GetOwnedListedNFTs, GetOwnedListedNFTsVariables } from "./__generated__/GetOwnedListedNFTs";
import { parseRawNFT } from "./helpers";
import { GetListedNFTs, GetListedNFTsVariables } from "./__generated__/GetListedNFTs";


const useListedNFTs = () =>{
    const {address} = useSigner();

    const {data} = useQuery<GetListedNFTs,GetListedNFTsVariables>(
        GET_LISTED_NFTS,
        {variables:{currentAddress:address ?? ""},skip : !address}
    );

    // console.log(data); 

    const ListedNFTs = data?.nfts.map(parseRawNFT) ;
    
    // console.log(ownedNFTs);
    
    return {ListedNFTs};
}


const GET_LISTED_NFTS = gql`
    query GetListedNFTs($currentAddress:String!){
        nfts(where:{
            to:"0x28f1CFd86E1C35eC33cD9c4554bc5b62417D126f"
            from_not: $currentAddress
        }){
            id
            from
            to
            tokenURI
            price
        }
    }
`;

export default useListedNFTs