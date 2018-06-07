import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div style={{ marginTop: 80 }} >
        <h1 style={{ textAlign: 'justify'}}>Each day, American Express makes it easier, safer and more rewarding for 
          consumers and businesses to purchase the things they need and for merchants to sell their goods and services. </h1> 

          <p>An engine of commerce, American Express provides innovative payment, travel and expense management solutions for 
          individuals and businesses of all sizes. Most of all, we help our customers realize their dreams and aspirations through 
          industry-leading benefits, access to unique experiences, business-building insights, and global customer care. We enable our customers to do more and achieve more.</p>
        {/* <button className="btn btn-primary">Button Primary</button> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing.location
  };
}

export default connect(mapStateToProps)(About);