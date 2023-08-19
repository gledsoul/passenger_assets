# passenger_assets
program for mint nft from passengers


Solana Account Model(Ownership):



1. Has the wallet to assign and pay all transactions (wallet’s holder ) 

2.  Program(executable) are the Account's creator that owns the accounts (Buffers)

3. The program is responsible for create and own Accounts, they generate a program_id after the creation 

4. Clients(wallet’s holder) requesting to the Program  create instead creating it directly.

5. Accounts are buffers set the State and they need pay the rent for the space that they  are using 

6. Programs communicating to each other using Cross Program Integration (CPI) 

7. SPL Token is a Program responsible Token’s issue, eg : NFTs (ERC-20 in Ethereum)or Fungible Token(ERC-721).

8. Metaplex is the Program(protocol) responsible for the Token’s metadata creation and management, eg : attachment of logo, link and other information about the desirable asset that will be minted.


Conclusion  every activity has their own responsibility, that is assigned to an different Program 


https://docs.solana.com/developing/programming-model/accounts

https://www.metaplex.com/
