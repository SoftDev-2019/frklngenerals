import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";
import BlogImage1 from '../Images/generals1.jpeg';
import './blogmdboot.styles.scss';

const BlogMdBoot = () => {
  return (
      <div className='jumbotron blog-page-conatiner'>
            <MDBCard className="my-5 px-5 pb-5">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                </h2>
                <p className="text-center w-responsive mx-auto mb-5">
                </p>
                <MDBRow>
                <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <img
                        className="img-fluid"
                        src={BlogImage1}
                        alt=""
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                    <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Franklin Generals Secure 1st Win!</strong>
                    </h3>
                    <p className="dark-grey-text">
                    The Generals managed to take down the Showcase Prospects by a score of 8-6, securing their first win as a 
                    newly formed Franklin, TN travel team.  Solid defense and clutch hitting helped deliver a decisive win in the Fall Championship Game 7 
                    Tournament held on October 19th.  The team continues to show great overall improvements and will be in prime position come this spring
                    to deliver continued momentum and are hopeful the victories will start to pile up.
                    </p>
                    <p>
                    by <a href="#!" className="font-weight-bold">Shane Parkerson</a>, 10/19/2019
                    </p>
                    <MDBBtn color="primary" size="md">
                    Read More
                    </MDBBtn>
                </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                        alt=""
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                    <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Title of the news</strong>
                    </h3>
                    <p className="dark-grey-text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate
                    non provident et accusamus iusto odio dignissimos et dolorum
                    fuga.
                    </p>
                    <p>
                    by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 16/04/2018
                    </p>
                    <MDBBtn color="primary" size="md">
                    Read More
                    </MDBBtn>
                </MDBCol>
                </MDBRow>
            </MDBCardBody>
            </MDBCard>
        </div>
  );
}

export default BlogMdBoot;
