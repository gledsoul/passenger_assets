export type PassengerAssets = {
  "version": "0.1.0",
  "name": "passenger_assets",
  "instructions": [
    {
      "name": "mintNft",
      "accounts": [
        {
          "name": "mintAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "creatorKey",
          "type": "publicKey"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        }
      ]
    }
  ]
};

export const IDL: PassengerAssets = {
  "version": "0.1.0",
  "name": "passenger_assets",
  "instructions": [
    {
      "name": "mintNft",
      "accounts": [
        {
          "name": "mintAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "creatorKey",
          "type": "publicKey"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        }
      ]
    }
  ]
};
