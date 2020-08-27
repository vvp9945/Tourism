import React from 'react';
import {Carousel} from 'react-bootstrap'

export default() => (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6 text-center" style={{height:'100vh', backgroundColor:'#008489'}}>
					<p className="heading">SnowborneExplorers</p>
					<p className="text-white" style={{fontSize:"1.5rem"}}>
							Topological sorting is the ordeing of the vertices in which if there is an edge 
							from u to v, then u comes before v in the ordering. 

					</p>
					<a type="submit" className="btn btn-danger">Send us Query</a>
				</div>	
				<div className="col-md-6" style={{height:'100vh', backgroundColor:'#d6ecef'}}>
							<div style={{marginTop:"9rem"}}>
							<Carousel >
							  <Carousel.Item>
								    <img
								      className="d-block w-100"
								      src="https://static.toiimg.com/photo/msid-72520428,width-96,height-65.cms"
								      alt="First slide"
								    />
							  <Carousel.Caption>
								      <h3>First slide label</h3>
								      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								      </Carousel.Caption>
							  </Carousel.Item>
							  <Carousel.Item>
								    <img
								      className="d-block w-100"
								      src="https://www.kullumanalitrips.com/assets/images/shimla-manali-tour-package.jpeg"
								      alt="Third slide"
								    />
							  <Carousel.Caption>
							     	 <h3>Second slide label</h3>
							      	 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							  </Carousel.Caption>
							  </Carousel.Item>
							  <Carousel.Item>
							    <img
							      className="d-block w-100"
							      src="https://lh3.googleusercontent.com/proxy/HVbqCZCI5FqZg8oT5nXRoHkKtWaeZKZ8YIArd4orIpqJm70oyzr093oJYUpRJp-ZPMyxAyM2KPI9_1KDsC57clIszrMc14lp9fJ84CospGrD9qzTjGWjSvJ4oiPkUCP_nN8"
							      alt="Third slide"
							    />

							    <Carousel.Caption>
							      <h3>Third slide label</h3>
							      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							    </Carousel.Caption>
							  </Carousel.Item>
							</Carousel>
						</div>
				</div>
			</div>
		</div>
	)