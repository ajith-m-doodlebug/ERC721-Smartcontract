// SPDX-License-Identifier: MIT

const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");
module.exports = function (deployer) {
    deployer.deploy(ERC721PresetMinterPauserAutoId, "MOON WALK", "OT", "https://gateway.pinata.cloud/ipfs/QmSENfrCkHBQ9wZLwXu44aPLaxYRwTB512JZen65wz35wS/");
};