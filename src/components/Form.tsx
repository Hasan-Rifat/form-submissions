import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

interface FormValues {
  target: { name: string; value: string };
}

function Form() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    q1: "",
    description: "",
    name: "",
    email: "",
    gender: "",
    occupation: "",
    income: "",
    age: "",
    choiceOne: "",
    secondChoices: "",
    thirdChoice: "",
    additionalMessage: "",
  });

  /*  useEffect(() => {
   
  }, [loading]); */

  if (loading) {
    return <Loading />;
  }

  const handleInputChange = (e: FormValues) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function generateRandomCode() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return code;
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    const code = generateRandomCode();

    console.log(formValues);

    const url = "https://getform.io/f/05b1e06d-8327-4039-b6cf-84f3678bd051";

    const data = fetch(url, {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (await data) {
      setLoading(false);
      navigate(`/thank-you/${code}`);
    }
    // Redirect to the Thank You page with the generated code
  };

  return (
    <>
      <section
        className={`bg-[url('./assets/bg.jpg')] py-10 bg-cover relative top-full bg-center bg-no-repeat `}
      >
        <div className="w-full h-full flex absolute left-0 top-0  justify-center items-center bg-black opacity-50 -z-0"></div>
        <div className="container mx-auto relative z-50">
          <div>
            <div className="text-center">
              <h2 className="text-3xl mb-5 text-white">
                Your Questionnaire Design
              </h2>
              <p className="leading-5 text-white">
                Sed nunc leo, ullamcorper in facilisis feugiat, pulvinar sed
                est.
                <br />
                Mauris varius sem erat, at faucibus quam hendrenteu. Quisque
                <br />
                vel malesuada tortor.
              </p>
            </div>
          </div>
          <div className="max-w-[700px] mx-auto">
            {/* Question 1 */}
            <div className="text-white bg-black opacity-70 p-10 my-10">
              <form>
                <p className="mb-5">
                  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc tellus tortor, vehicula quis sollicitudin blandit,
                  suscipit et lorem. Ut vitae gravida leo.
                </p>
                <div className="flex items-center mb-5">
                  <input
                    type="radio"
                    id="q1-option1"
                    name="q1"
                    value=" A. Nam porttitor ipsum id iaculis"
                    className="mr-2"
                    required={formValues.q1 === ""}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="q1-option1">
                    A. Nam porttitor ipsum id iaculis
                  </label>
                </div>
                <div className="flex items-center mb-5">
                  <input
                    required={formValues.q1 === ""}
                    type="radio"
                    id="q1-option2"
                    name="q1"
                    value="B. Curabitur laoreet risus justo"
                    className="mr-2"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="q1-option2">
                    B. Curabitur laoreet risus justo
                  </label>
                </div>
                <div className="flex items-center mb-5">
                  <input
                    required={formValues.q1 === ""}
                    type="radio"
                    id="q1-option3"
                    name="q1"
                    value="C. Vestibulum ante ipsum primis"
                    className="mr-2"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="q1-option3">
                    C. Vestibulum ante ipsum primis
                  </label>
                </div>
                <div className="flex items-center mb-5">
                  <input
                    required={formValues.q1 === ""}
                    type="radio"
                    id="q1-option4"
                    name="q1"
                    value="D. Proin et sem velmi pretium"
                    className="mr-2"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="q1-option4">
                    D. Proin et sem velmi pretium
                  </label>
                </div>
              </form>
            </div>
            {/* Question 2 */}
            <div className="text-white bg-black opacity-70 p-10 my-10">
              <form>
                <p className="mb-5">
                  2. Quisque vel malesuada tortor. Class aptent taciti sociosqu
                  and litora torquent per <br />
                  conubia nostra, per inceptos himenaeos
                </p>
                <div className="flex gap-10">
                  <textarea
                    required={formValues.description === ""}
                    className="w-1/2 h-28 mb-5 p-2 bg-black opacity-70 border "
                    placeholder="Your description"
                    name="description"
                    value={formValues.description}
                    onChange={handleInputChange}
                  />

                  <div className="w-1/2">
                    <div className="flex items-center mb-2">
                      <input
                        required={formValues.choiceOne === ""}
                        type="checkbox"
                        id="choiceOne"
                        name="choiceOne"
                        value="choiceOne"
                        className="mr-2"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="choiceOne">Choice One</label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        required={formValues.secondChoices === ""}
                        type="checkbox"
                        id="secondChoices"
                        name="secondChoices"
                        value="secondChoices"
                        className="mr-2"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="q2-option2">Second Choices</label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        required={formValues.thirdChoice === ""}
                        type="checkbox"
                        id="thirdChoice"
                        name="thirdChoice"
                        value="thirdChoice"
                        className="mr-2"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="q2-option3">Third Choice</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* Form */}
            <div className="relative z-50 bg-black opacity-70 p-10 my-10">
              <p className="mb-5 text-wh text-white">
                3. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </p>

              <div className="flex gap-5">
                <div className="w-1/2">
                  <div>
                    <select
                      required={formValues.occupation === ""}
                      className="bg-black opacity-70 mb-5  border-gray-300 text-white border-b-[1px] text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="occupation"
                      value={formValues.occupation}
                      onChange={handleInputChange}
                    >
                      <option value="">Your Occupation</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>

                  <div>
                    <select
                      required={formValues.income === ""}
                      className="bg-black opacity-70 mb-5  border-gray-300 text-white border-b-[1px] text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="income"
                      value={formValues.income}
                      onChange={handleInputChange}
                    >
                      <option value="">Income Level</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>

                  <div>
                    <input
                      required={formValues.age === ""}
                      type="text"
                      placeholder="Your Age"
                      className="bg-black opacity-70 mb-5  border-gray-300 text-white border-b-[1px] text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="age"
                      value={formValues.age}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="w-1/2">
                  <div>
                    <input
                      required={formValues.name === ""}
                      type="text"
                      className="w-full p-2.5 bg-black opacity-70 mb-5  border-gray-300 text-white border-b-[1px] text-sm  focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Name"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <input
                      required={formValues.email === ""}
                      type="email"
                      className="w-full p-2.5 bg-black opacity-70 mb-5  border-gray-300 text-white border-b-[1px] text-sm  focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    {/* group radio input mail female */}
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          required={formValues.gender === ""}
                          onChange={handleInputChange}
                          type="radio"
                          name="gender"
                          value="male" // Set the value to "male"
                          className="form-radio text-indigo-600 h-4 w-4"
                        />
                        <span className="text-gray-700">Mail</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          required={formValues.gender === ""}
                          onChange={handleInputChange}
                          type="radio"
                          name="gender"
                          value="female" // Set the value to "female"
                          className="form-radio text-pink-600 h-4 w-4"
                        />
                        <span className="text-gray-700">Female</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <textarea
                  required={formValues.additionalMessage === ""}
                  className="w-full p-2.5 bg-black opacity-70 mb-5  border-gray-300 text-white border-b-[1px] text-sm  focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Additional Message"
                  name="additionalMessage"
                  value={formValues.additionalMessage}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-blue-500 py-2 px-6 rounded text-white hover:bg-blue-600 transition-all duration-200"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
