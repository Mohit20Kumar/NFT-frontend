import { ethers } from "ethers"
import { GET_OWNED_NFTs_nfts } from "./__generated__/GET_OWNED_NFTs"
import { NFT } from "./interfaces"

export const parseRawNFT = (raw:GET_OWNED_NFTs_nfts) : NFT => {
    return {
        id : raw.id,
        owner : raw.price == "0" ? raw.to : raw.from,
        price : raw.price== "0" ? "0" : ethers.utils.formatEther(raw.price),
        tokenURI : raw.tokenURI 
    }
}
