import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props
    return (
      <div className='container my-3'>
        <div   className="card" >
        <div style={{display:'flex',
        justifyContent:'flex-end',
        position:'absolute',
        right:'0'}}>
        <span className="badge rounded-pill bg-danger">
    {source}
   
  </span>
  </div>
  <img src={imageUrl?imageUrl:"https://cloudinary.hbs.edu/hbsit/image/upload/s--EmT0lNtW--/f_auto,c_fill,h_375,w_750,/v20200101/6978C1C20B650473DD135E5352D37D55.jpg"}   className="card-img-top" alt="..."/>
  <div   className="card-body">
    <h5   className="card-title">{title}...</h5>
    <p   className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer"  target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>

      </div>
    )
  }
}

export default NewsItem
