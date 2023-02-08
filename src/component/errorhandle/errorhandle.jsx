import React from "react";

export default function Errorhandle() {


    return (
        <div className="w-screen h-screen flex flex-wrap text-center justify-center content-center">
            <h1 className="w-screen font-bold text-2xl mb-12">Oops!</h1>
            <h4 className="w-screen mb-6 font-medium">Sorry, an unexpected error has occurred</h4>
            <i className="w-screen opacity-60">Not Found</i>
        </div>
    )
}