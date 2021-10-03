import React from 'react';
import Image from 'next/image'
const Faq = () => {
    return (

        <div class="bg-lightblue py-20 px-4">
            <h2 class="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12">
            Frequently Asked Questions
            </h2>
            <div class="mx-auto max-w-6xl flex flex-col md:flex-row">
                <div className=" mr-32 w-full md:w-1/3 ">
                    <Image className="object-contain" src="/noman-images/Faq1-image.jpg" height={660} width={400} alt="noman" />
                </div>
                <dl class="w-full md:w-2/3">
                    <dt class="mb-4">
                        <h3 class="text-xl font-semibold">
                        If a patient requests the release of their medical records, what process would you go through?
                        </h3>
                    </dt>
                    <dd class="mb-16">
                        <p>
                            Running existing machine learning projects in Valohai is very simple! Integration only requires adding a valohai.yaml configuration file. Moving projects in and out of Valohai is easy – the integration is only the configuration file.
                        </p>
                    </dd>
                    <dt class="mb-4">
                        <h3 class="text-xl font-semibold">
                        How long until my test results are back?
                        </h3>
                    </dt>
                    <dd class="mb-16">
                        <p>
                            We don’t. Valohai isn’t a data science platform; it&#x27;s a Machine Learning Management Platform that handles the whole ML pipeline from feature extraction, to training of your model and to deploying it into production in a reproducible manner. Data science platforms offer hosted notebooks and AutoML solutions.
                        </p>
                    </dd>
                    <dt class="mb-4">
                        <h3 class="text-xl font-semibold">
                        When can I have food/meds/visitors?
                        </h3>
                    </dt>
                    <dd class="mb-16">
                        <p>
                            Depends. Most of our customers use their own cloud and thus pay for usage according to their own agreements. Valohai doesn&#x27;t charge anything on top of the per-user license fee. If you don&#x27;t have a cloud provider, you can use our AWS, GCP and Azure accounts, and we&#x27;ll only charge you for what you use.
                        </p>
                    </dd>
                </dl>
            </div>
        </div>

    );
};

export default Faq;