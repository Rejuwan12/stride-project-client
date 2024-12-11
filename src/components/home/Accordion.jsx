

const Accordion = () => {
  return (
    <div className="flex flex-col w-4/5 gap-2 mx-auto lg:w-2/3 ">
      <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
    </div>
  )
}

export default Accordion
