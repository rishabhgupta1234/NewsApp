import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
	articles = [
		{
			source: {
				id: null,
				name: "Gizmodo.com",
			},
			author: "Vinamrata Chaturvedi, Quartz",
			title: "Everything to Know About Bitcoin Pizza Day",
			description: "On May 22, 2010, a man in Florida paid 10,000 Bitcoin for pizza.Read more...",
			url: "https://gizmodo.com/bitcoin-pizza-day-date-origin-history-cryptocurrency-1851487831",
			urlToImage:
				"https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/98aec6479bad523f5c89763f4acf0cf9.jpg",
			publishedAt: "2024-05-20T13:20:00Z",
			content:
				"On January 3, 2009, Bitcoins creator, Satoshi Nakamoto, mined the first block of the Bitcoin blockchain, known as the Genesis Block, which contained a reward of 50 Bitcoin. The technical foundations … [+1156 chars]",
		},
		{
			source: {
				id: "wired",
				name: "Wired",
			},
			author: "Andy Greenberg",
			title: "A Vast New Dataset Could Supercharge the AI Hunt for Crypto Money Laundering",
			description:
				"Blockchain analysis firm Elliptic, MIT, and IBM, have released a new AI detection model—and the 200-million-transaction dataset it's trained on—that aims to spot the “shape” of Bitcoin money laundering.",
			url: "https://www.wired.com/story/ai-crypto-tracing-model-money-laundering/",
			urlToImage:
				"https://media.wired.com/photos/6631a1936dc0c77846852ed5/191:100/w_1280,c_limit/Crypto-Money-Laundering-Security-GettyImages-1543076825.jpg",
			publishedAt: "2024-05-01T13:00:00Z",
			content:
				"As a test of their resulting AI tool, the researchers checked its outputs with one cryptocurrency exchangewhich the paper doesn't nameidentifying 52 suspicious chains of transactions that had all ult… [+3279 chars]",
		},
		{
			source: {
				id: "wired",
				name: "Wired",
			},
			author: "Joel Khalili",
			title: "Craig Wright Lied About Creating Bitcoin And Faked Evidence, Judge Rules",
			description:
				"A UK judge has determined that Craig Wright forged evidence in a campaign to prove he is Satoshi Nakamoto, creator of Bitcoin, in a move that prevents him from bringing further lawsuits in the country.",
			url: "https://www.wired.com/story/craig-wright-lied-faked-evidence-bitcoin-judge-says/",
			urlToImage:
				"https://media.wired.com/photos/663964ab2a04ee031b4d1808/191:100/w_1280,c_limit/Craig-Wright-Sentencing-Business-2024583568.jpg",
			publishedAt: "2024-05-20T11:01:15Z",
			content:
				"Weve seen a cascading effect from the pronouncement on a host of other litigations globally, says Grewal. For people outside of crypto, [all this] might sound cartoonish. But with Wrights claims fall… [+3320 chars]",
		},
		{
			source: {
				id: "wired",
				name: "Wired",
			},
			author: "Joel Khalili",
			title: "FTX Creditors Say Payout Deal Is 'an Insult'—and Plan to Revolt",
			description:
				"FTX has a plan to repay its former crypto customers more than the billions of dollars they lost in the latest bankruptcy proposal. But some will reject it anyway.",
			url: "https://www.wired.com/story/ftx-creditors-crypto-payout-rejection/",
			urlToImage:
				"https://media.wired.com/photos/663ba309e6755459097533ca/191:100/w_1280,c_limit/FTX-Bankruptcy-Business-GettyImages-1245052532.jpg",
			publishedAt: "2024-05-08T17:00:02Z",
			content:
				"Some creditors of the bankrupt crypto exchange FTX are preparing to reject a plan that would see them recover 118 percent of the money they lost. The proposal is far less generous than it might seem,… [+2945 chars]",
		},
		{
			source: {
				id: null,
				name: "Slashdot.org",
			},
			author: "EditorDavid",
			title: "Jack Dorsey's Block Is Investing 10% Of Its Bitcoin Profits Into Monthly Bitcoin Purchases",
			description:
				"An anonymous reader shared this report from the blog Bitcoinist:\n\nJack Dorsey's financial services and digital payments company, Block Inc., announced it will begin investing 10% of its monthly Bitcoin-related gross profits into BTC purchases. This announceme…",
			url: "https://slashdot.org/story/24/05/04/0356205/jack-dorseys-block-is-investing-10-of-its-bitcoin-profits-into-monthly-bitcoin-purchases",
			urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
			publishedAt: "2024-05-04T17:34:00Z",
			content:
				"Jack Dorsey's financial services and digital payments company, Block Inc., announced it will begin investing 10% of its monthly Bitcoin-related gross profits into BTC purchases. This announcement was… [+1022 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "Bitcoin beaches one billion transactions milestone",
			description:
				"Bitcoin (BTC) — the world’s first and most valuable cryptocurrency — has surpassed one billion processed transactions. This milestone was… Continue reading Bitcoin beaches one billion transactions milestone\nThe post Bitcoin beaches one billion transactions mi…",
			url: "https://readwrite.com/bitcoin-beaches-one-billion-transactions-milestone/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/ada10bac-b90f-4618-8f7c-490d8dc6692a.webp",
			publishedAt: "2024-05-06T12:22:39Z",
			content:
				"Bitcoin (BTC) the world’s first and most valuable cryptocurrency has surpassed one billion processed transactions. This milestone was reached 800 weeks and one day after the launch of Bitcoin on Janu… [+2107 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "El Salvador’s Bitcoin holdings reach $373M",
			description:
				"According to a report by the country’s “Bitcoin Office,” a government entity overseeing all Bitcoin-related projects, El Salvador could hold… Continue reading El Salvador’s Bitcoin holdings reach $373M\nThe post El Salvador’s Bitcoin holdings reach $373M appea…",
			url: "https://readwrite.com/el-salvadors-bitcoin-holdings-reach-373m/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/25b91b12-cd57-4b3e-b4e5-4be84fbf56bd.webp",
			publishedAt: "2024-05-15T17:38:10Z",
			content:
				"According to a report by the country’s “Bitcoin Office,” a government entity overseeing all Bitcoin-related projects, El Salvador could hold up to 5,750 BTC.\r\nSince 2021, the nation has mined nearly … [+2540 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "BlackRock’s Bitcoin ETF sees first day without inflows",
			description:
				"BlackRock’s iShares Bitcoin Trust (IBIT) has experienced its first day without any inflows since the introduction of Bitcoin (BTC) exchange-traded… Continue reading BlackRock’s Bitcoin ETF sees first day without inflows\nThe post BlackRock’s Bitcoin ETF sees f…",
			url: "https://readwrite.com/blackrocks-bitcoin-etf-sees-first-day-without-inflows/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/eaa08a84-02bf-4e04-af55-67efc1e88950.webp",
			publishedAt: "2024-04-25T11:28:14Z",
			content:
				"BlackRock’s iShares Bitcoin Trust (IBIT) has experienced its first day without any inflows since the introduction of Bitcoin (BTC) exchange-traded funds (ETFs) in the United States in January, Farsid… [+1836 chars]",
		},
		{
			source: {
				id: "business-insider",
				name: "Business Insider",
			},
			author: "fdemott@insider.com (Filip De Mott)",
			title: "Bitcoin could see a wave of forced selling as miners face the reality of lower rewards post-halving, research firm says",
			description:
				'"If miners were forced to sell even a fraction of their holdings over the coming month this would have a negative impact on markets," Kaiki Research wrote.',
			url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-supply-crypto-currency-miners-btc-sell-off-decline-2024-5",
			urlToImage: "https://i.insider.com/6643af41b4abc992e8c96de5?width=1200&format=jpeg",
			publishedAt: "2024-05-15T12:17:10Z",
			content:
				"Markets have long considered bitcoin's recent halving as a major price bolster, but it could bring a wave of selling from one corner of the sector, according to Kaiko Research.\r\nThe April halving is … [+1708 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "Bitcoin whales drive price above $67,000 resistance",
			description:
				"New research suggests that Bitcoin whales have been accumulating the cryptocurrency, keeping the price above a crucial resistance level until… Continue reading Bitcoin whales drive price above $67,000 resistance\nThe post Bitcoin whales drive price above $67,0…",
			url: "https://readwrite.com/bitcoin-whales-drive-price-above-67000-resistance/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/79155949-f7ed-40ad-9e7a-c28f0a2f771e.webp",
			publishedAt: "2024-04-24T14:56:54Z",
			content:
				"New research suggests that Bitcoin whales have been accumulating the cryptocurrency, keeping the price above a crucial resistance level until April 24, 2024.\r\nAccording to data from TradingView, Bitc… [+2172 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Sam Shedden",
			title: "US Bitcoin ETFs see record outflows after Fed announcement",
			description:
				"US spot Bitcoin exchange-traded funds (ETFs) endured their biggest single-day outflow yesterday (May 1). Investors took over half a billion… Continue reading US Bitcoin ETFs see record outflows after Fed announcement\nThe post US Bitcoin ETFs see record outflo…",
			url: "https://readwrite.com/us-bitcoin-etfs-see-record-outflows-after-fed-announcement/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/1_bjzQshRa2U1xuTa7rNuw.jpg",
			publishedAt: "2024-05-02T09:15:43Z",
			content:
				"US spot Bitcoin exchange-traded funds (ETFs) endured their biggest single-day outflow yesterday (May 1).\r\nInvestors took over half a billion dollars ($563.7m) out of the 11 publicly traded American B… [+1827 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "Twitter’s Jack Dorsey predicts Bitcoin could hit $1 million in six years",
			description:
				"Jack Dorsey, a prominent tech leader, is making a bold prediction about the future of Bitcoin (BTC), stating that its… Continue reading Twitter’s Jack Dorsey predicts Bitcoin could hit $1 million in six years\nThe post Twitter’s Jack Dorsey predicts Bitcoin co…",
			url: "https://readwrite.com/bitcoin-value-jack-dorsey-1-million/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/98661240-f9cf-415a-83bb-3f45fa5f4110.webp",
			publishedAt: "2024-05-10T19:25:05Z",
			content:
				"Jack Dorsey, a prominent tech leader, is making a bold prediction about the future of Bitcoin (BTC), stating that its price could skyrocket to over $1 million by 2030.\r\nIn an interview with Pirates W… [+1962 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "Bitcoin transaction fees plummet after halving event",
			description:
				"Bitcoin (BTC) started the week on a stable note, trading above $65,800, as transaction fees have significantly decreased following the… Continue reading Bitcoin transaction fees plummet after halving event\nThe post Bitcoin transaction fees plummet after halvi…",
			url: "https://readwrite.com/bitcoin-transaction-fees-plummet-after-halving-event/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/18a8acb3-35fb-49c7-86b1-049e5aee8ee9.webp",
			publishedAt: "2024-04-22T17:51:17Z",
			content:
				"Bitcoin (BTC) started the week on a stable note, trading above $65,800, as transaction fees have significantly decreased following the recent halving event.\r\nThis reduction in fees is a stark contras… [+1975 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "Bitcoin surges 7.5% as global central banks ease",
			description:
				"Bitcoin (BTC) experienced its most significant single-day gain in nearly two months on Wednesday, surging over 7.5% to reach $66,250.… Continue reading Bitcoin surges 7.5% as global central banks ease\nThe post Bitcoin surges 7.5% as global central banks ease …",
			url: "https://readwrite.com/bitcoin-surges-7-5-as-global-central-banks-ease/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/b6fc31bb-a0c3-424c-9f83-ef1c6a070118.webp",
			publishedAt: "2024-05-16T16:23:22Z",
			content:
				"Bitcoin (BTC) experienced its most significant single-day gain in nearly two months on Wednesday, surging over 7.5% to reach $66,250.\r\nThe development follows recent reports that El Salvador’s Bitcoi… [+2298 chars]",
		},
		{
			source: {
				id: "business-insider",
				name: "Business Insider",
			},
			author: "yzhan@insider.com (Yuheng Zhan)",
			title: "Bitcoin's bull run may be over and the next move could see it drop nearly 50%, says a market vet who predicted the token's 2018 crash",
			description:
				'"It has happened. It is real. You may not want to believe it, but I place a 25% chance that Bitcoin has already topped for this cycle," Brandt said.',
			url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-prediction-crash-bull-rally-over-crypto-peter-brandt-2024-4",
			urlToImage: "https://i.insider.com/6630f4160dfb1341e9009d67?width=1200&format=jpeg",
			publishedAt: "2024-04-30T14:47:48Z",
			content:
				"Bitcoin may have peaked at its high around $73,000 in March, and what awaits investors could be a 50% fall in the token's value. \r\nThat's according to Peter Brandt, a veteran chart analyst and the fo… [+2077 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Sam Shedden",
			title: "Hong Kong launches Asia’s first sport Bitcoin and Ethereum ETFs",
			description:
				"Hong Kong launched six spot bitcoin and ether exchange-traded funds (ETFs) on Tuesday (Apr 30) in a historic move for… Continue reading Hong Kong launches Asia’s first sport Bitcoin and Ethereum ETFs\nThe post Hong Kong launches Asia’s first sport Bitcoin and …",
			url: "https://readwrite.com/hong-kong-launches-asias-first-sport-bitcoin-and-ethereum-etfs/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/WqK7wQ05R4OvG6LtG7WP0A.jpg",
			publishedAt: "2024-04-30T10:05:30Z",
			content:
				"Hong Kong launched six spot bitcoin and ether exchange-traded funds (ETFs) on Tuesday (Apr 30) in a historic move for the Asian cryptocurrency market.\r\nThe ETFs, issued by China Asset Management (Chi… [+1855 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Sophie Atkinson",
			title: "Approved spot Bitcoin ETFs could be coming to Australia’s largest stock exchange",
			description:
				"Approved spot Bitcoin exchange-traded funds could soon be visible on the Australian ASX stock exchange, according to reports. ASX Ltd… Continue reading Approved spot Bitcoin ETFs could be coming to Australia’s largest stock exchange\nThe post Approved spot Bit…",
			url: "https://readwrite.com/approved-spot-bitcoin-etfs-could-be-coming-to-australias-largest-stock-exchange/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/ASX-scaled.jpg",
			publishedAt: "2024-04-29T16:04:21Z",
			content:
				"Approved spot Bitcoin exchange-traded funds could soon be visible on the Australian ASX stock exchange, according to reports.\r\nASX Ltd is responsible for handling around four-fifths of Australias equ… [+1750 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Sam Shedden",
			title: "Bitcoin price falls to $57,000 as investors brace for Fed decision",
			description:
				"Bitcoin has fallen sharply to around $57,300, as investor sentiment shifts ahead of a US Federal Reserve announcement on interest… Continue reading Bitcoin price falls to $57,000 as investors brace for Fed decision\nThe post Bitcoin price falls to $57,000 as i…",
			url: "https://readwrite.com/bitcoin-price-falls-to-57000-as-investors-brace-for-fed-decision/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/c_jneVajSQSERHYjk5v-ZA.jpg",
			publishedAt: "2024-05-01T09:56:09Z",
			content:
				"Bitcoin has fallen sharply to around $57,300, as investor sentiment shifts ahead of a US Federal Reserve announcement on interest rates expected later on Wednesday (May 1).\r\nThis steep decline marks … [+2328 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "James Spillane",
			title: "Pepe, Shiba Inu Up After Bitcoin Halving – Top Meme Coin Price Predictions",
			description:
				"Meme coin prices outperform, source – Crypto Bubbles While BTC pulled back slightly after the historic fourth Bitcoin halving took… Continue reading Pepe, Shiba Inu Up After Bitcoin Halving – Top Meme Coin Price Predictions\nThe post Pepe, Shiba Inu Up After B…",
			url: "https://readwrite.com/pepe-shiba-inu-up-after-bitcoin-halving-top-meme-coin-price-predictions/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/meme-coins-shiba-inu-pepe-bonk-pumping.png",
			publishedAt: "2024-04-21T12:18:10Z",
			content:
				"Meme coin prices outperform, source – Crypto Bubbles\r\nWhile BTC pulled back slightly after the historic fourth Bitcoin halving took place on Friday, the weekend has seen a recovery with the Bitcoin p… [+2136 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "Bitcoin wallets holding over $1,000 surge 20% in 2024",
			description:
				"According to a report released by Fidelity Digital Assets on Monday, the number of Bitcoin wallets holding $1,000 or more… Continue reading Bitcoin wallets holding over $1,000 surge 20% in 2024\nThe post Bitcoin wallets holding over $1,000 surge 20% in 2024 ap…",
			url: "https://readwrite.com/bitcoin-wallets-holding-over-1000-surge-20-in-2024/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/edecbe45-9e83-4422-98b5-c3786c33a5d1.webp",
			publishedAt: "2024-04-25T11:15:48Z",
			content:
				"According to a report released by Fidelity Digital Assets on Monday, the number of Bitcoin wallets holding $1,000 or more has experienced a significant 20% increase since the beginning of 2024.\r\nThis… [+2556 chars]",
		},
		{
			source: {
				id: "business-insider",
				name: "Business Insider",
			},
			author: "mfox@businessinsider.com (Matthew Fox)",
			title: "The state of Wisconsin purchased $163 million in bitcoin ETFs in the first quarter",
			description:
				"The state of Wisconsin Investment Board purchased bitcoin ETFs from BlackRock and Grayscale in the first quarter, according to a 13F filing.",
			url: "https://markets.businessinsider.com/news/currencies/wisconsin-buys-bitcoin-163-million-crypto-etf-state-investment-board-2024-5",
			urlToImage: "https://i.insider.com/6644fd3b14fb5b23cc5cbfca?width=1200&format=jpeg",
			publishedAt: "2024-05-15T19:47:07Z",
			content:
				"The state of Wisconsin purchased $163 million worth of bitcoin in the first quarter, according to a 13F filing made with the Securities and Exchange Commission. \r\nThe Wisconsin Investment Board manag… [+1287 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "Bitcoin’s price remains stable despite 2023 halving event",
			description:
				"Bitcoin (BTC), the world’s most well-known cryptocurrency, has recently undergone its fourth halving event since its creation. Halvings, which occur… Continue reading Bitcoin’s price remains stable despite 2023 halving event\nThe post Bitcoin’s price remains s…",
			url: "https://readwrite.com/bitcoins-price-remains-stable-despite-2023-halving-event/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/5741799d-bbc6-4257-9c19-842037cf87d4.webp",
			publishedAt: "2024-04-22T19:02:32Z",
			content:
				"Bitcoin (BTC), the world’s most well-known cryptocurrency, has recently undergone its fourth halving event since its creation.\r\nHalvings, which occur roughly every four years, are designed to reduce … [+2300 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Sam Shedden",
			title: "Jack Dorsey’s Block invests in Bitcoin’s with 10% monthly profit allocation",
			description:
				"Twitter founder Jack Dorsey’s payments firm Block has announced plans to plow 10% of profits from its products back into… Continue reading Jack Dorsey’s Block invests in Bitcoin’s with 10% monthly profit allocation\nThe post Jack Dorsey’s Block invests in Bitc…",
			url: "https://readwrite.com/jack-dorseys-block-invests-in-bitcoins-with-10-monthly-profit-allocation/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/Rp8Tnrm2RfeEfwrYB2HL2A.jpg",
			publishedAt: "2024-05-03T09:28:09Z",
			content:
				"Twitter founder Jack Dorsey’s payments firm Block has announced plans to plow 10% of profits from its products back into Bitcoin each month.\r\nThe initiative, unveiled in Block’s latest quarterly repo… [+2465 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Petar Jovanović",
			title: "Meme Stocks Outperform Bitcoin Price In May – Are These Under-the-Radar Solana Meme Coins Next?",
			description:
				"If someone asked you about the hottest story in crypto this week, the unexpected answer might be meme stocks. Even… Continue reading Meme Stocks Outperform Bitcoin Price In May – Are These Under-the-Radar Solana Meme Coins Next?\nThe post Meme Stocks Outperfor…",
			url: "https://readwrite.com/meme-stocks-outperform-bitcoin-price-in-may-are-these-under-the-radar-solana-meme-coins-next/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/Bitcoin.jpg",
			publishedAt: "2024-05-15T07:47:48Z",
			content:
				"If someone asked you about the hottest story in crypto this week, the unexpected answer might be meme stocks. Even though they are not part of the crypto world, the meme stocks Gamestop (GME) and AMC… [+5044 chars]",
		},
		{
			source: {
				id: null,
				name: "Slashdot.org",
			},
			author: "EditorDavid",
			title: "How a Renewable Energy-Powered Bitcoin Startup Helps Electrify Rural Africa",
			description:
				'CNBC visited a small group of bitcoin miners who "set up shop at the site of an extinct volcano" near Kenya\'s Hell\'s Gate National Park. \n\nTheir mine "consists of a single 500-kilowatt mobile container that, from the outside, looks like a small residential tr…',
			url: "https://news.slashdot.org/story/24/04/21/0221237/how-a-renewable-energy-powered-bitcoin-startup-helps-electrify-rural-africa",
			urlToImage: "https://a.fsdn.com/sd/topics/money_64.png",
			publishedAt: "2024-04-21T15:34:00Z",
			content:
				'CNBC visited a small group of bitcoin miners who "set up shop at the site of an extinct volcano" near Kenya\'s Hell\'s Gate National Park.Their mine "consists of a single 500-kilowatt mobile container … [+2801 chars]',
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Sam Shedden",
			title: "Coinbase profits soar over $1 billion from a year amid Bitcoin ETF boom",
			description:
				"Coinbase, one of the world’s largest cryptocurrency exchanges, reported a remarkable turnaround in its first-quarter financial results on Thursday (May… Continue reading Coinbase profits soar over $1 billion from a year amid Bitcoin ETF boom\nThe post Coinbase…",
			url: "https://readwrite.com/coinbase-profits-soar-over-1-billion-from-a-year-amid-bitcoin-etf-boom/",
			urlToImage: null,
			publishedAt: "2024-05-03T13:04:31Z",
			content:
				"Coinbase, one of the world’s largest cryptocurrency exchanges, reported a remarkable turnaround in its first-quarter financial results on Thursday (May 2).\r\nThe company swung to a staggering $1.2 bil… [+1837 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "Samourai Wallet founders arrested, crypto market tumbles",
			description:
				"The dramatic arrest of Samourai Wallet Bitcoin founders by the US Department of Justice has sparked shock in the crypto… Continue reading Samourai Wallet founders arrested, crypto market tumbles\nThe post Samourai Wallet founders arrested, crypto market tumble…",
			url: "https://readwrite.com/samourai-wallet-founders-arrested-crypto-market-tumbles/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/43315ab7-69d3-46cd-9d1a-12a0569aeebe.webp",
			publishedAt: "2024-04-26T13:10:12Z",
			content:
				"The dramatic arrest of Samourai Wallet Bitcoin founders by the US Department of Justice has sparked shock in the crypto community.\r\nOn April 24, the cryptocurrency market experienced a brief tumble f… [+2296 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Petar Jovanović",
			title: "Altcoins Hold Up as Bitcoin Price Flash Crashes with Upcoming CPI This Week – Best Crypto to Buy the Dip",
			description:
				"As the highly anticipated Consumer Price Index (CPI) report draws near on May 15, 2024, the potential impact on Bitcoin’s… Continue reading Altcoins Hold Up as Bitcoin Price Flash Crashes with Upcoming CPI This Week – Best Crypto to Buy the Dip\nThe post Altco…",
			url: "https://readwrite.com/altcoins-hold-up-as-bitcoin-price-flash-crashes-with-upcoming-cpi-this-week-best-crypto-to-buy-the-dip/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/image.jpg",
			publishedAt: "2024-05-13T13:26:22Z",
			content:
				"As the highly anticipated Consumer Price Index (CPI) report draws near on May 15, 2024, the potential impact on Bitcoin’s price and the broader cryptocurrency market looms large. The CPI data serves … [+5340 chars]",
		},
		{
			source: {
				id: "business-insider",
				name: "Business Insider",
			},
			author: "Geoff Weiss",
			title: "College alum surprised that his ayahuasca-inspired speech praising bitcoin got groans and boos",
			description:
				'Pan said on LinkedIn he\'d gotten "some help from AI (Ayahuasca Intelligence)" to write the speech, which featured meditation and singing.',
			url: "https://www.businessinsider.com/osu-commencement-speaker-ayahuasca-praises-bitcoin-booed-viral-2024-5",
			urlToImage: "https://i.insider.com/663a92abb4abc992e8c6b56a?width=1200&format=jpeg",
			publishedAt: "2024-05-08T19:32:55Z",
			content:
				"Chris PanCourtesy of OSU\r\n\u003Cul\u003E\u003Cli\u003EAn ayahuasca-inspired commencement speech didn't go too well at Ohio State University.\u003C/li\u003E\u003Cli\u003EAlum and jewelry entrepreneur Chris Pan lauded bitcoin and sang songs.… [+2818 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "BlackRock’s IBIT achieves 70-day inflow streak milestone",
			description:
				"BlackRock’s spot Bitcoin exchange-traded fund (ETF), IBIT, has achieved an impressive milestone by registering net inflows for 70 consecutive days.… Continue reading BlackRock’s IBIT achieves 70-day inflow streak milestone\nThe post BlackRock’s IBIT achieves 7…",
			url: "https://readwrite.com/blackrocks-ibit-achieves-70-day-inflow-streak-milestone/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/4c0abbbe-8b32-43db-b01d-d2c9ff3919bc.webp",
			publishedAt: "2024-04-23T10:58:18Z",
			content:
				"BlackRock’s spot Bitcoin exchange-traded fund (ETF), IBIT, has achieved an impressive milestone by registering net inflows for 70 consecutive days.\r\nThis achievement places the fund among the top 10 … [+2105 chars]",
		},
		{
			source: {
				id: null,
				name: "VentureBeat",
			},
			author: "Jordan Fragen",
			title: "ZBD Gen Z gamer study: spending habits, creators, bitcoin rewards",
			description:
				"In ZBD's survey of Gen Z gamers, 36% said gaming companies run by older generations were out of touch. Creators and bitcoin rewards can help.",
			url: "https://venturebeat.com/games/zbd-gen-z-gamer-study/",
			urlToImage: "https://venturebeat.com/wp-content/uploads/2024/05/GenZCaseStudy_Images.jpg?w=1200&strip=all",
			publishedAt: "2024-05-15T12:00:00Z",
			content:
				"Join gaming leaders live this May 20-21 in Los Angeles to examine the strategies needed to adapt and excel in an ever evolving landscape, featuring insights from leading voices and thought leaders in… [+1755 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Petar Jovanović",
			title: "Bitcoin and Altcoins Prices Pump as CPI Report Shows US Inflation Falls to 3.4% – Best AI Cryptocurrencies to Buy Now",
			description:
				"Today’s CPI report has continued an 11-week trend of data arriving above 3%, leaving traders skeptical about the possibility of… Continue reading Bitcoin and Altcoins Prices Pump as CPI Report Shows US Inflation Falls to 3.4% – Best AI Cryptocurrencies to Buy…",
			url: "https://readwrite.com/bitcoin-and-altcoins-prices-pump-as-cpi-report-shows-us-inflation-falls-to-3-4-best-ai-cryptocurrencies-to-buy-now/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/Coinmarketcap-I-1.png",
			publishedAt: "2024-05-15T14:57:23Z",
			content:
				"Today’s CPI report has continued an 11-week trend of data arriving above 3%, leaving traders skeptical about the possibility of the figure falling below that number anytime soon. However, the report … [+4334 chars]",
		},
		{
			source: {
				id: null,
				name: "Investor's Business Daily",
			},
			author: "Investor's Business Daily",
			title: "Coinbase Delivers Major Earnings, Revenue Beat Thanks To Soaring Bitcoin Prices, Crypto Interest",
			description:
				"Coinbase transaction revenue more-than doubled as crypto prices, participation rally with bitcoin.",
			url: "https://www.investors.com/news/coinbase-stock-q1-earnings-beat-bitcoin-cryptocurrency/",
			urlToImage: "https://www.investors.com/wp-content/uploads/2023/12/Stock-coinbase-02-adobe.jpg",
			publishedAt: "2024-05-02T21:20:43Z",
			content:
				"Coinbase posted a major first-quarter beat late Thursday, driven by bitcoin's start-of-the-year boom and renewed interest in cryptocurrencies. Meanwhile, bitcoin rebounded slightly after falling on W… [+3758 chars]",
		},
		{
			source: {
				id: null,
				name: "Slashdot.org",
			},
			author: "msmash",
			title: "Self-Proclaimed Bitcoin Inventor Lied 'Repeatedly' To Support Claim, Says UK Judge",
			description:
				'An Australian computer scientist who claimed he invented bitcoin lied "extensively and repeatedly" and forged documents "on a grand scale" to support his false claim, a judge at London\'s High Court ruled on Monday. From a report: [...] Judge James Mellor rule…',
			url: "https://slashdot.org/story/24/05/20/161242/self-proclaimed-bitcoin-inventor-lied-repeatedly-to-support-claim-says-uk-judge",
			urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
			publishedAt: "2024-05-20T16:02:00Z",
			content:
				"Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]",
		},
		{
			source: {
				id: "business-insider",
				name: "Business Insider",
			},
			author: "Sarah Andersen,Laila Maidan,Jose Duran",
			title: "The cryptocurrencies that are worth investing in, from bitcoin to altcoins to meme coins",
			description:
				"Investing in crypto can be attractive, but where should you start? Here is a breakdown of digital currencies from Pepe to Ethereum.",
			url: "https://www.businessinsider.com/crypto-bitcoin-meme-alt-coins-ethereum-investing-finance-cryptocurrencies",
			urlToImage: "https://i.insider.com/663cf152f27898f532d57eca?width=1200&format=jpeg",
			publishedAt: "2024-05-09T18:54:54Z",
			content:
				"The offers and details on this page may have updated or changed since the time of publication. See our article on Business Insider for current information.\r\nInvesting in crypto can be attractive, but… [+133 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "Chinese police bust illegal crypto ring worth almost $2 billion",
			description:
				"In a recent development, Chinese police have uncovered a massive underground banking racket in the city of Chengdu, involving the… Continue reading Chinese police bust illegal crypto ring worth almost $2 billion\nThe post Chinese police bust illegal crypto rin…",
			url: "https://readwrite.com/chinese-crypto-bank-shut-down-190-arrested/",
			urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/952ca4e8-8fe6-415c-b30b-090dfa289001.webp",
			publishedAt: "2024-05-16T17:31:46Z",
			content:
				"In a recent development, Chinese police have uncovered a massive underground banking racket in the city of Chengdu, involving the popular stablecoin Tether (USDT). The illegal operation, which facili… [+2265 chars]",
		},
	];
	constructor() {
		super();
		console.log("I'm a constructor of news component");
		this.state = {
			articles: this.articles,
			loading: false,
		};
	}
	async componentDidMount() {
		console.log("cdm");
		let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=04a18f955bb547f0b2f4b243b4ec3803";
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
		});
	}

	render() {
		return (
			<div className="my-3 container">
				<h2>NewsDaily - Top Headlines</h2>

				<div className="row">
					{this.state.articles.map((e) => {
						return (
							<div className="col-md-4" key={e.url}>
								<Newsitem
									title={
										e.title
											? e.title.slice(0, 45)
											: "Chinese police bust illegal crypto ring worth almost $2 billion"
									}
									description={
										e.description
											? e.description.slice(0, 88)
											: "In a recent development, Chinese police have uncovered a massive underground banking racket in the city of Chengdu, involving the… Continue reading Chinese police bust illegal crypto ring worth almost $2 billion\nThe post Chinese police bust illegal crypto rin…"
									}
									imageurl={
										e.urlToImage
											? e.urlToImage
											: "https://readwrite.com/wp-content/uploads/2024/05/952ca4e8-8fe6-415c-b30b-090dfa289001.webp"
									}
									newsurl={
										e.url
											? e.url
											: "https://readwrite.com/chinese-crypto-bank-shut-down-190-arrested/"
									}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default News;
