import { Helmet } from "react-helmet-async";

const Contact = () => {

    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>

            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-1/2 bg-white shadow-md rounded-md px-4 py-5 box-border">
                    <h1 className="font-mono text-3xl text-black text-center md-4">CONTACT WITH US</h1>
                    <h1 className="font-mono text-5xl text-black text-center md-4">Get In Touch With Us</h1><br/>
                    <div>
                        <tr>
                            Don't hesitate to get in touch with us! <br />
                            • 01945563326,<br />
                            • 01945560214,<br />
                            • 01945563346,<br />
                        </tr>
                        <tr>
                            • support@oneyear.academy
                        </tr>
                        <tr>• 20/21, Block-B, Kaderabad Housing,<br />
                              Mohammadpur, Dhaka-1207
                        </tr>
                    </div>

                    <div>
                        <h1 className="font-mono text-3xl text-black text-center md-4">Send Us Enquiry</h1>

                        <input
                            placeholder="Name"
                            className="w-full rounded-md border border-blue-300 p-2 outline-none"
                        />

                        <input
                            placeholder="Email"
                            className="w-full rounded-md border border-blue-300 p-2 mt-3 outline-none"
                        />

                        <textarea
                            id="Message"
                            placeholder="Message"
                            maxLength={400}
                            rows={5}
                            className="w-full rounded-md border border-blue-300 p-2 mt-3 outline-none resize-none"
                        />

                        <button className="bg-[#333] text-white text-base font-mono px-5 py-2 rounded-md mt-3" disabled>
                            Submit
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Contact;