import * as anchor from '@project-serum/anchor'
import { Program, Wallet } from '@project-serum/anchor'
import { FlightReview } from '../target/types/flight_review'



describe('flight_review', () => {
  const provider = anchor.AnchorProvider.env();
  const wallet = provider.wallet as Wallet;
  anchor.setProvider(provider);
  const program = anchor.workspace.FlightReview as Program<FlightReview>
  
  const FLIGHT = "RBJ157";
  
  const REVIEW = "All was perfect!";
  
  const RATING = 5;
  

  it("Is initialized!", async () => {
    // Add your test here.
    //console.log(program);
    
   const [REVIEW_PDA] = await anchor.web3.PublicKey.findProgramAddress(
  [Buffer.from(FLIGHT), wallet.publicKey.toBuffer()],
   program.programId
);
 
 console.log(`Reviewer: ${wallet.publicKey.toString()}`);
 console.log(`Review PDA: ${REVIEW_PDA.toString()}`);
 
 
 /*The instruction bellow will only work on DevNet*/
 
// let latestBlockhash = await program.connection.getLatestBlockhash('finalized')

 const tx = await program.methods
  .postReview(
    FLIGHT,
    REVIEW,
    RATING
  )
  .accounts({ review: REVIEW_PDA })
  .rpc({
  skipPreflight:true
});
  
  /*The instruction bellow will only work on DevNet*/
  
 /* await pg.connection.confirmTransaction({
  signature: tx,
  blockhash: latestBlockhash.blockhash,
  lastValidBlockHeight: latestBlockhash.lastValidBlockHeight
});
*/

/*console.log(`https://explorer.solana.com/tx/${tx}?cluster=devnet`);

const data = await program.account.passenger.fetch(REVIEW_PDA);
console.log(`Reviewer: `,data.reviewer.toString());
console.log(`Flight: `,data.flight);
console.log(`Review: `,data.review);
console.log(`Rating: `,data.rating);
  
*/
   
  });
});
