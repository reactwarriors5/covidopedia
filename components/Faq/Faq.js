import React from 'react'
import Image from 'next/image'
const Faq = () => {
  return (
    <div className='bg-lightblue py-10 '>
      <center className='text-gray-700 text-3xl font-extrabold leading-9 border-b-2 border-gray-100  pb-3 mb-10'>
        Frequently Asked Questions
      </center>
      <div class="grid grid-cols-2 divide-x">
        <div>
          <div className=' justify-center flex flex-col divide-x md:flex-row'>
            <div className='w-full md:w-2/3'>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>

                  How long does it take for symptoms of the coronavirus disease to appear?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                How do you address the privacy and security of personal health information?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    Like any vaccine, COVID-19 vaccines can cause mild, short term side effects, such as a low-grade fever or pain or redness at the injection site. Most reactions to vaccines are mild and go away within a few days on their own
                    . More serious or long-lasting side effects to vaccines are possible but extremely rare.
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                  Is it safe to take paracetamol before receiving the COVID-19 vaccine?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    Taking painkillers such as paracetamol before receiving the COVID-19 vaccine to prevent side effects is not recommended. This is because
                    it is not known how painkillers may affect how well the vaccine works
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                  Who are at higher risk of developing serious illness from COVID-19?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    Older people, and those with underlying medical problems like cardiovascular disease, diabetes,
                    chronic respiratory disease, and cancer are more likely to develop serious illness.
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                Why can I make appointments online for some doctors and not others?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    We don’t. Valohai isn’t a data science platform; it is a
                    Machine Learning Management Platform that handles the whole ML
                    pipeline from feature extraction, to training of your model and to
                    deploying it into production in a reproducible manner. Data
                    science platforms offer hosted notebooks and AutoML solutions.
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                Why are members of my treatment team looking at the computer so often?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    Complications may include pneumonia, acute respiratory distress
                    syndrome (ARDS), multi-organ failure, septic shock, and death.
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                Why does the nursing staff ask if I have to use the bathroom so often?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    Depends. Most of our customers use their own cloud and thus pay
                    for usage according to their own agreements. Valohai doesn&#x27;t
                    charge anything on top of the per-user license fee. If you
                    don&#x27;t have a cloud provider, you can use our AWS, GCP and
                    Azure accounts, and we&#x27;ll only charge you for what you use.
                  </p>
                </dd>
              </details>
            </div>
          </div>
        </div>
        <div>
          <div className='pl-14 flex flex-col divide-x md:flex-row'>
            <div className='w-full md:w-2/3'>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>

                  How long does it take for symptoms of the coronavirus disease to appear?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                  Are there any side effects from the COVID-19 vaccine?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    Like any vaccine, COVID-19 vaccines can cause mild, short term side effects, such as a low-grade fever or pain or redness at the injection site. Most reactions to vaccines are mild and go away within a few days on their own
                    . More serious or long-lasting side effects to vaccines are possible but extremely rare.
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                  Is it safe to take paracetamol before receiving the COVID-19 vaccine?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    Taking painkillers such as paracetamol before receiving the COVID-19 vaccine to prevent side effects is not recommended. This is because
                    it is not known how painkillers may affect how well the vaccine works
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                  Who are at higher risk of developing serious illness from COVID-19?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    Older people, and those with underlying medical problems like cardiovascular disease, diabetes,
                    chronic respiratory disease, and cancer are more likely to develop serious illness.
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                  How long until my test results are back?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    We don’t. Valohai isn’t a data science platform; it is a
                    Machine Learning Management Platform that handles the whole ML
                    pipeline from feature extraction, to training of your model and to
                    deploying it into production in a reproducible manner. Data
                    science platforms offer hosted notebooks and AutoML solutions.
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                  What are the complications of COVID-19?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    Complications may include pneumonia, acute respiratory distress
                    syndrome (ARDS), multi-organ failure, septic shock, and death.
                  </p>
                </dd>
              </details>
              <details>
                <summary className='mb-5 text-sm text-justify font-semibold'>
                  When can I have food/meds/visitors?
                </summary>
                <dd className='mb-16'>
                  <p className="pl-4 text-sm text-justify">
                    Depends. Most of our customers use their own cloud and thus pay
                    for usage according to their own agreements. Valohai doesn&#x27;t
                    charge anything on top of the per-user license fee. If you
                    don&#x27;t have a cloud provider, you can use our AWS, GCP and
                    Azure accounts, and we&#x27;ll only charge you for what you use.
                  </p>
                </dd>
              </details>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Faq
{/* <div className="flex flex-col  sm:px-4 lg:px-12  ">
            <details >
              <summary className="py-2 outline-none cursor-pointer focus:underline">Optio maiores eligendi molestiae totam dolores similique?</summary>
              <div className="px-4 pb-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
              </div>
            </details>
            <details >
              <summary className="py-2  cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
              <div className="px-4 pb-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
              <div className="px-4 pb-4 space-y-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
              </div>
            </details>
          </div> */}