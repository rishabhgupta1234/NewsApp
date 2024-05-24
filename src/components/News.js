import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
	constructor() {
		super();
		console.log("I'm a constructor of news component");
		this.state = {
			articles: [],
			loading: false,
			page: 1,
		};
	}
	async componentDidMount() {
		console.log("inside cdm");
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=04a18f955bb547f0b2f4b243b4ec3803&page=1&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}
	handlePrevClick = async () => {
		console.log("Previous");
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=04a18f955bb547f0b2f4b243b4ec3803&page=${
			this.state.page - 1
		}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);

		this.setState({
			articles: parsedData.articles,
			page: this.state.page - 1,
			loading: false,
		});
	};
	handleNextClick = async () => {
		console.log("Next");

		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=04a18f955bb547f0b2f4b243b4ec3803&page=${
			this.state.page + 1
		}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();

		console.log(parsedData);

		this.setState({
			articles: parsedData.articles,
			page: this.state.page + 1,
			loading: false,
		});
	};

	render() {
		console.log("inside render");
		return (
			<div className="my-3 container">
				<h1 className="text-center">NewsDaily - Top Headlines</h1>
				{this.state.loading && <Spinner />}
				<div className="row">
					{!this.state.loading &&
						this.state.articles.map((e) => {
							return (
								<div className="col-md-3" key={e.url}>
									<Newsitem
										title={
											e.title
												? e.title.slice(0, 45)
												: "Chinese police bust illegal crypto ring worth almost $2 billion"
										}
										description={
											e.description
												? e.description.slice(0, 88)
												: "In a recent development, Chinese police have uncovered a massive underground banking racket in"
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
					<div className="container d-flex justify-content-between">
						<button className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>
							&larr; Previous
						</button>
						<button
							className="btn btn-dark"
							disabled={Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1}
							onClick={this.handleNextClick}>
							Next &rarr;{" "}
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default News;
