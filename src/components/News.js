import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from "prop-types";

export class News extends Component {
	static defaultProps = {
		country: "in",
		pageSize: 8,
		category: "general",
		// setProgress: function () {},
	};

	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string,
	};
	constructor(props) {
		super(props);

		this.state = {
			articles: [],
			loading: true,
			page: 1,
			totalResults: 0,
		};

		document.title = `${this.props.category} - NewsDaily`;
	}

	async componentDidMount() {
		this.props.setProgress(10);
		console.log("inside cdm");
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=04a18f955bb547f0b2f4b243b4ec3803&page=1&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.props.setProgress(50);
		// console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
		this.props.setProgress(100);
	}
	handlePrevClick = async () => {
		console.log("Previous");
		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&apiKey=04a18f955bb547f0b2f4b243b4ec3803&page=${this.state.page - 1}&category=${
			this.props.category
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

		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&apiKey=04a18f955bb547f0b2f4b243b4ec3803&page=${this.state.page + 1}&category=${
			this.props.category
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
	fetchMoreData = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&apiKey=04a18f955bb547f0b2f4b243b4ec3803&page=${this.state.page + 1}&category=${
			this.props.category
		}&pageSize=${this.props.pageSize}`;
		// this.setState({ loading: false });
		let data = await fetch(url);
		let parsedData = await data.json();

		console.log(parsedData);

		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			page: this.state.page + 1,
			loading: false,
		});
	};
	render() {
		console.log("inside render");
		return (
			<>
				{/* <h1 className="text-center">Top - Headlines</h1> */}
				{this.state.loading && <Spinner />}
				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={<Spinner />}>
					<div className="container">
						<div className="row">
							{this.state.articles.map((e) => {
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
											publishedAt={e.publishedAt ? e.publishedAt : "000000"}
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
				</InfiniteScroll>
				{/* {!this.state.loading && (
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
				)} */}
			</>
		);
	}
}

export default News;
