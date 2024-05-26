import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

// import Business from "./components/Business";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default class App extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		progress: true,
	// 	};
	// }
	state = {
		progress: 0,
	};
	setProgress = (progress) => {
		this.setState({
			progress: progress,
		});
	};
	render() {
		return (
			<>
				<Router>
					<LoadingBar color="#f11946" height={3} progress={this.state.progress} />
					<Navbar />
					<Routes>
						<Route
							exact
							path="/"
							element={
								<News
									setProgress={this.setProgress}
									key="general"
									pageSize={16}
									country="in"
									category="general"
								/>
							}></Route>
						<Route
							exact
							path="/business"
							element={
								<News
									setProgress={this.setProgress}
									key="business"
									pageSize={16}
									country="in"
									category="business"
								/>
							}></Route>
						<Route
							exact
							path="/sports"
							element={
								<News
									setProgress={this.setProgress}
									key="sports"
									pageSize={16}
									country="in"
									category="sports"
								/>
							}></Route>
						<Route
							exact
							path="/technology"
							element={
								<News
									setProgress={this.setProgress}
									key="technology"
									pageSize={16}
									country="in"
									category="technology"
								/>
							}></Route>

						<Route
							exact
							path="/entertainment"
							element={
								<News
									setProgress={this.setProgress}
									key="entertainment"
									pageSize={16}
									country="in"
									category="entertainment"
								/>
							}></Route>
						<Route
							exact
							path="/science"
							element={
								<News
									setProgress={this.setProgress}
									key="science"
									pageSize={16}
									country="in"
									category="science"
								/>
							}></Route>
						<Route
							exact
							path="/health"
							element={
								<News
									setProgress={this.setProgress}
									key="health"
									pageSize={16}
									country="in"
									category="health"
								/>
							}></Route>
					</Routes>
				</Router>
			</>
		);
	}
}
