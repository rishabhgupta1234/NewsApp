import React, { Component } from "react";

export class Newsitem extends Component {
	render() {
		let { title, description, imageurl, newsurl, publishedAt } = this.props;
		// var utcDate = "2011-06-29T16:52:48.000Z"; // ISO-8601 formatted date returned from server
		var localDate = new Date(publishedAt);
		return (
			<div className="my-3">
				<div className="card">
					<img src={imageurl} className="card-img-top" alt="News Image" style={{ height: "200px" }} />
					<div className="card-body">
						<h5 className="card-title">{title}...</h5>
						<p className="card-text">{description}...</p>
						<p className="card-text">
							<small className="text-muted">
								{"Published Date " +
									localDate.getDate() +
									"/" +
									localDate.getMonth() +
									"/" +
									localDate.getFullYear()}
							</small>
						</p>
						<a href={newsurl} className="btn btn-sm btn-dark" target="_blank">
							Read more
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Newsitem;
