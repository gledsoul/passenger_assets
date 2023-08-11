use anchor_lang::prelude::*;

declare_id!("2Jez9xPGjWxHK9WWGTrMZe94omtbnC8XmUHPHDRkxhQw");

#[program]
mod flight_review {
    use super::*;
    pub fn post_review(ctx: Context<PassengerAccounts>, flight: String, review: String, rating: u8) -> Result<()> {
        let new_review = &mut ctx.accounts.review;
        new_review.reviewer = ctx.accounts.signer.key();
        new_review.flight = flight;
        new_review.review = review;
        new_review.rating = rating;
        msg!("flight review for {} - {} stars", new_review.flight, new_review.rating);
        msg!("Review: {}", new_review.review);

        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(flight: String)]
pub struct PassengerAccounts<'info> {
    #[account(
        init_if_needed,
        payer = signer,
        space = 500,
        seeds = [flight.as_bytes().as_ref(), signer.key().as_ref()],
        bump
    )]
pub review: Account<'info,Passenger>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>, 
}

#[account]
pub struct Passenger {
    pub reviewer: Pubkey,
    pub flight: String,
    pub review: String,
    pub rating: u8
    
}












































