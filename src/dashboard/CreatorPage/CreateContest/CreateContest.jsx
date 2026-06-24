import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth'
import axios from "axios";

const CreateContest = () => {

  const [liveTitle, setLiveTitle] = useState("New Contest Title");
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  // console.log(user);

  
  const onSubmit = async (data) => {

    const fileOfPhoto = data.image[0];

    const formData = new FormData();
    formData.append("image", fileOfPhoto);
    const imageUpload = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMAGEBB_API}`;

    axios.post(imageUpload, formData)
    .then(image_res => {
      console.log(image_res);

      const imageUrl = image_res.data.data.display_url;

      const ContestObj = {
            title: data.name,
            image: imageUrl,
            description: data.description,
            taskInstruction: data.task,
            contestType: data.type,
            registrationFee: Number(data.price),
            prizeMoney: Number(data.prizeMoney),
            deadline: new Date(data.deadline),
            participantsCount: 0,
            totalSubmissions: 0,
            status: "pending",
            creator: {
              uid: user.uid,
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
            },
            winner: null,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

       console.log(ContestObj);

    })
  
    // await axiosSecure.post("/contests", contestData);
  };


  return (
    <div className="min-h-screen bg-base-100 px-4 py-10 flex justify-center">
      <div className="w-full max-w-6xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-base-content">
              Launch New Contest
            </h2>
            <p className="text-base-content/60 text-sm max-w-xl">
              Create a prestigious competition to discover top talent.
            </p>
          </div>
          <div className="px-4 py-2 rounded-full bg-base-200 border border-base-300 text-xs text-base-content/70">
            CREATOR SCORE: 98/100
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-base-200/60 backdrop-blur-xl border border-base-300 rounded-2xl p-8 space-y-6 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-base-content/70">
                    Contest Name
                  </label>
                  <input
                    {...register("name", { required: true, onChange: (e) => setLiveTitle(e.target.value) })}
                    className="mt-2 w-full rounded-xl bg-base-100 border border-base-300 px-4 py-3 text-base-content focus:outline-none focus:border-secondary transition"
                    placeholder="e.g. Cyberpunk Design Challenge"
                  />
                </div>
                <div>
                  <label className="text-sm text-base-content/70">
                    Contest Type
                  </label>
                  <select
                    {...register("type", { required: true })}
                    className="mt-2 w-full rounded-xl bg-base-100 border border-base-300 px-4 py-3 text-base-content focus:outline-none focus:border-secondary transition"
                  >
                    <option>Image Design</option>
                    <option>Article Writing</option>
                    <option>Business Idea</option>
                    <option>Gaming Review</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm text-base-content/70">
                  Cover Image URL
                </label>
                <input
                  {...register("image")}
                  type="file"
                  className="mt-2 w-full rounded-xl bg-base-100 border border-base-300 px-4 py-3 text-base-content focus:outline-none focus:border-secondary transition"
                  placeholder="Upload your file here"
                />
              </div>
              <div>
                <label className="text-sm text-base-content/70">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  rows={4}
                  className="mt-2 w-full rounded-xl bg-base-100 border border-base-300 px-4 py-3 text-base-content focus:outline-none focus:border-secondary transition"
                  placeholder="Describe contest..."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-base-content/70">
                    Entry Fee ($)
                  </label>
                  <input
                    type="number"
                    {...register("price")}
                    className="mt-2 w-full rounded-xl bg-base-100 border border-base-300 px-4 py-3 text-base-content focus:outline-none focus:border-secondary transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-base-content/70">
                    Prize Money ($)
                  </label>
                  <input
                    type="number"
                    {...register("prizeMoney")}
                    className="mt-2 w-full rounded-xl bg-base-100 border border-base-300 px-4 py-3 text-base-content focus:outline-none focus:border-secondary transition"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-base-content/70">
                  Task Instructions
                </label>
                <textarea
                  {...register("task")}
                  rows={3}
                  className="mt-2 w-full rounded-xl bg-base-100 border border-base-300 px-4 py-3 text-base-content focus:outline-none focus:border-secondary transition"
                />
              </div>
              <div>
                <label className="text-sm text-base-content/70">
                  Deadline
                </label>
                <input
                  type="date"
                  {...register("deadline")}
                  className="mt-2 w-full rounded-xl bg-base-100 border border-base-300 px-4 py-3 text-base-content focus:outline-none focus:border-secondary transition"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-base-300">
                <button
                  type="button"
                  onClick={() => reset()}
                  className="px-5 py-2 rounded-xl border border-base-300 text-base-content/70 hover:bg-base-100 transition"
                >
                  Reset
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-secondary text-white font-medium hover:opacity-90 transition"
                >
                  Submit for Approval
                </button>
              </div>
            </form>
          </div>
          <div className="xl:col-span-4 space-y-6">
            <div className="bg-base-200/60 border border-base-300 rounded-2xl overflow-hidden shadow-lg">
              <div className="h-40 bg-base-300 flex items-center justify-center text-base-content/40">
                Live Preview
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-base-content">
                  {liveTitle}
                </h3>
                <p className="text-sm text-base-content/60">
                  Live preview will update as you type...
                </p>
              </div>
            </div>
            <div className="bg-base-200/40 border border-base-300 rounded-2xl p-5">
              <h4 className="font-semibold text-base-content mb-3">
                Submission Guidelines
              </h4>
              <ul className="space-y-2 text-sm text-base-content/60">
                <li>• Prize must be meaningful for visibility</li>
                <li>• Description should include judging criteria</li>
                <li>• Use high quality images</li>
                <li>• Deadline must be realistic</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateContest;