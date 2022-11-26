import React, { useState } from "react";
import "./wordGraph.css"
import Button from "../../component/UI/Button";
import PopMessage from "../../component/UI/popupMessage";
import { WordRanking } from "../../logics/wordRanking";
import Histogram from "../../component/charts/histogram";
import { TTT_TEXT_API } from "../../constant/constant";
import Loader from "../../component/UI/Loader";

export default function WordGraph(){
    const [graphLabels, setGraphLabels] = useState(null);
    const [graphData, setGraphData]=useState(null);
    const [errMessage, setErrMessage] = useState("");
    const [isLoading, setLoading] = useState(false);

    const fetchMessage = async (e) => {
        try{
            setLoading(true)
            const response = await fetch(TTT_TEXT_API)
            const respText = await response.text()
            const wordRank = WordRanking(respText);
            let labels=[]
            let dataSet = []
            for(let i=1;i<=20;i++){
                labels.push(wordRank[i][0])
                dataSet.push(wordRank[i][1])
            }
            setGraphLabels(labels);
            setGraphData(dataSet);
            setLoading(false)
        } catch(err){
            console.log(err.message);
            setErrMessage(err.message)
            setLoading(false)
        }
    }

    return (
        <div>
            {/* loader */}
            {isLoading ? <Loader /> : null}
         
            {/* error Pop message */}
            {errMessage.length ? <PopMessage message={errMessage} /> : null}

            {/* histogram based on word ranking */}
            {graphData ? (
                <div className="histogram">
                    <Histogram
                        graphTitle={"Top 20 words with highest Occurrence"}
                        barTitle={"Frequency"} labels={graphLabels}
                        data={graphData}
                    />
                </div>
            ) : null}

            {/* Submit button on initial load */} 
            <div className="submitBtn">
                <Button value={!graphData ? "Submit" : "Submit again"} type="submit" onClick={(e) => fetchMessage(e)} />
            </div>
        </div>
    )
}