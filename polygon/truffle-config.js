require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY.length === 0) {
  throw new Error("Clé privée manquante ou invalide dans le fichier .env");
}

module.exports = {
  networks: {
    polygon_testnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY,
          "https://rpc-amoy.polygon.technology/"
        ),
      network_id: 80002,       // ID réseau pour Polygon Mumbai Testnet
      gas: 3000000,            // Limite de gas pour la transaction
      gasPrice: 25000000000,   // Gas price minimum requis (en wei, ici 25 Gwei)
      confirmations: 2,        // Nombre de confirmations
      timeoutBlocks: 2,      // Timeout après 200 blocs
      skipDryRun: true,        // Ignore le dry run
    },
  },
  compilers: {
    solc: {
      version: "0.8.21",
    },
  },
};
