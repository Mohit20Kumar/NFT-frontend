
import {gql,useQuery} from "@apollo/client"
import useSigner from "../signer";
import { GET_OWNED_NFTs, GET_OWNED_NFTsVariables, GET_OWNED_NFTs_nfts } from "./__generated__/GET_OWNED_NFTs";
import { NFT } from "./interfaces";
import { ethers } from "ethers";
import { GetOwnedListedNFTs, GetOwnedListedNFTsVariables } from "./__generated__/GetOwnedListedNFTs";
import { parseRawNFT } from "./helpers";


const useOwnedListedNFTs = () =>{
    const {address} = useSigner();

    const {data} = useQuery<GetOwnedListedNFTs,GetOwnedListedNFTsVariables>(
        GET_OWNED_LISTED_NFTS,
        {variables:{owner:address ?? ""},skip : !address}
    );

    // console.log(data); 

    const ownedListedNFTs = data?.nfts.map(parseRawNFT) ;
    
    // console.log(ownedNFTs);
    
    return {ownedListedNFTs};
}


const GET_OWNED_LISTED_NFTS = gql`
    query GetOwnedListedNFTs($owner:String!){
        nfts(where:{
            to:"0x28f1CFd86E1C35eC33cD9c4554bc5b62417D126f"
            from: $owner
        }){
            id
            from
            to
            tokenURI
            price
        }
    }
`;

export default useOwnedListedNFTs