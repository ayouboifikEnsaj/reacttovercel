
export default function Main(props){

return(
    <>
    <main id="main" className="main">


<section className="section dashboard">
  <div className="row">

  
  {props.children}

  </div>
</section>

</main>
    </>
)
}