<template>
	<div class="footer">
			<div class="container">
				<div class="footer-grids">
					<div class="col-md-3 footer-grid animated wow slideInLeft" data-wow-delay=".5s">
						<h3>About Us</h3>
						<p>Duis aute irure dolor in reprehenderit in voluptate velit esse.<span>Excepteur sint occaecat cupidatat 
							non proident, sunt in culpa qui officia deserunt mollit.</span></p>
					</div>
					<div class="col-md-3 footer-grid animated wow slideInLeft" data-wow-delay=".6s">
						<h3>Contact Info</h3>
						<ul>
							<li><i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>New York City.</span></li>
							<li><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
							<li><i class="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 567</li>
						</ul>
					</div>
					<div class="col-md-3 footer-grid animated wow slideInLeft" data-wow-delay=".7s">
						<h3>Flickr Posts</h3>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/13.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/14.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/15.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/16.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/13.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/14.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/15.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/16.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/13.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/14.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/15.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="footer-grid-left">
							<a href="single.html"><img src="images/16.jpg" alt=" " class="img-responsive" /></a>
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="col-md-3 footer-grid animated wow slideInLeft" data-wow-delay=".8s">
						<h3>Blog Posts</h3>
						<div class="footer-grid-sub-grids">
							<div class="footer-grid-sub-grid-left">
								<a href="single.html"><img src="images/9.jpg" alt=" " class="img-responsive" /></a>
							</div>
							<div class="footer-grid-sub-grid-right">
								<h4><a href="single.html">culpa qui officia deserunt</a></h4>
								<p>Posted On 25/3/2016</p>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="footer-grid-sub-grids">
							<div class="footer-grid-sub-grid-left">
								<a href="single.html"><img src="images/10.jpg" alt=" " class="img-responsive" /></a>
							</div>
							<div class="footer-grid-sub-grid-right">
								<h4><a href="single.html">Quis autem vel eum iure</a></h4>
								<p>Posted On 25/3/2016</p>
							</div>
							<div class="clearfix"> </div>
						</div>
					</div>
					<div class="clearfix"> </div>
				</div>
				<div class="footer-logo animated wow slideInUp" data-wow-delay=".5s">
					<h2><a href="index.html">Best Store <span>shop anywhere</span></a></h2>
				</div>
				<div class="copy-right animated wow slideInUp" data-wow-delay=".5s">
					<p>Copyright &copy; 2016.Company name All rights reserved.<a target="_blank" href="http://www.freemoban.com/">www.freemoban.com</a></p>
				</div>
			</div>
		</div>
</template>

<script>
	
</script>
	
<style>
	.footer{
		background:#2E2E2E;
		padding:3em 0;
	}
	.footer-grid h3{
		font-size:2em;
		color:#fff;
		margin:0 0 1em;
		position:relative;
		padding-bottom:.5em;
	}
	.footer-grid h3:before{
		position: absolute;
	    bottom: 0%;
	    left: 0%;
	    width:30%;
	    height: 1px;
	    background: #828282;
	    content: '';
	}
	.footer-grid p{
		font-size:14px;
		color:#999;
		line-height:1.8em;
		margin:0;
	}
	.footer-grid p span{
		display:block;
		margin:1em 0 0;
	}
	.footer-grid ul li{
		list-style-type:none;
		margin-bottom:1em;
		color:#999;
		font-size:14px;
	}
	.footer-grid ul li i{
		color: #999;
	    border: 1px solid #999;
	    padding:.5em;
	    border-radius: 100%;
		-webkit-border-radius: 100%;
		-moz-border-radius: 100%;
		-o-border-radius: 100%;
		-ms-border-radius: 100%;
	    margin-right: 1em;
	}
	.footer-grid ul li span{
		display:block;
		margin-left: 3em;
	}
	.footer-grid ul li a{
		color:#999;
		text-decoration:none;
	}
	.footer-grid ul li a:hover{
		color:#fff;
	}
	.footer-grid-left{
		float:left;
		width:33.33%;
		padding:.3em;
	}
	.footer-grid-sub-grid-left{
		float:left;
		width:30%;
	}
	.footer-grid-sub-grid-right{
		float:right;
		width:62%;
	}
	.footer-grid-sub-grid-right h4 a{
		text-transform: capitalize;
	    font-size: 1em;
	    line-height: 1.5em;
	    color: #999;
	    text-decoration: none;
	}
	.footer-grid-sub-grid-right h4 a:hover{
		color:#fff;
	}
	.footer-grid-sub-grid-right p{
		margin:.5em 0 0;
		color:#999;
		font-size:14px;
		line-height:1.8em;
	}
	.footer-grid-sub-grids:nth-child(3){
		margin:1em 0 0;
	}
	.footer-logo{
		text-align:center;
		margin:3em 0;
	}
	.footer-logo h2 a{
		font-size: 2em;
	    color:#575757;
	    text-decoration: none;
	    position: relative;
	}
	.footer-logo h2{
		position:relative;
	}
	.footer-logo h2 a span{
		display:block;
		font-size:.2em;
		letter-spacing:5px;
		text-transform:uppercase;
	}
	.footer-logo h2:before,.footer-logo h2:after{
		content: '';
	    width: 36%;
	    height: 4px;
	    border-top: 1px solid #575757;
	    border-bottom: 1px solid #575757;
	    position: absolute;
	    top: 60%;
	}
	.footer-logo h2:before{
	    left: 0%;
	}
	.footer-logo h2:after{
	    right: 0%;
	}
	.copy-right p{
		text-align:center;
		color:#999;
		margin:0;
		line-height:1.8em;
	}
	.copy-right p a{
		color:#fff;
		text-decoration:none;
	}
	.copy-right p a:hover{
		color:#999;
	}
</style>
