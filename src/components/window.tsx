import React from "react";
import Image from 'next/image'
import Draggable, {DraggableCore} from 'react-draggable';

export default function WindowStructure() {
  return (
    <>
    <div className="os-div">

    <p>qowdqwq dqw dwq dwq d qwd w Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam error, necessitatibus esse recusandae quaerat excepturi autem enim reprehenderit at vitae reiciendis deserunt quis laborum amet praesentium! Sint necessitatibus perferendis similique. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, nisi. Repellendus quisquam unde ipsam praesentium officiis, sint eum autem saepe minima iusto, rem ex ullam omnis adipisci illo nihil eveniet! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tempora omnis dolorem aliquam repellendus, blanditiis provident a rerum hic alias libero voluptatem aliquid fuga sapiente quam nisi dignissimos doloribus mollitia.lore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid explicabo soluta dolorum neque, accusamus, adipisci odit optio, placeat voluptate suscipit impedit laboriosam exercitationem error? Perspiciatis nam rem laudantium repellat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora provident deleniti commodi repudiandae voluptates asperiores dicta et aut atque accusantium quod distinctio quia voluptatum, ipsa inventore nemo eos unde molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nemo. Nobis tempore mollitia ex culpa, asperiores odio vel iste inventore quos molestiae sed sint sapiente cum officiis placeat ratione eos! </p>

    <Draggable handle=".wb-header" bounds=".os-div">
    <div className="winbox">
        <div className="wb-header">
            <div className="wb-drag">
                {/* <div className="wb-icon"></div> */}
                <div className="wb-title">
                    <h2>Patient Report</h2>
                </div>
            </div>
            <div className="wb-control">
                <span className="wb-min">
                    <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjczIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEzLjI3MjciLz4KPGxpbmUgeDE9IjMzLjU0NTQiIHkxPSI5My4yNzI3IiB4Mj0iMTI2LjQ1NCIgeTI9IjkzLjI3MjciIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMTMuMjcyNyIvPgo8L3N2Zz4K"  
                    width={30} 
                    height={30} 
                    alt="min-icon"/>
                </span>
                <span className="wb-full">
                    <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSI3LjUiIHk9IjcuNSIgd2lkdGg9IjYiIGhlaWdodD0iNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB4PSI5LjUiIHk9IjkuNSIgd2lkdGg9IjYiIGhlaWdodD0iNiIgc3Ryb2tlPSJibGFjayIvPgo8L3N2Zz4K" width={30} height={30} alt="max-icon"></Image>
                </span>
                <span className="wb-close">
                    <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8bGluZSB4MT0iNi4zNTM1NSIgeTE9IjUuNjQ2NDUiIHgyPSIxNi4zNTM2IiB5Mj0iMTUuNjQ2NCIgc3Ryb2tlPSJibGFjayIvPgo8bGluZSB4MT0iNS42NDY0NSIgeTE9IjE1LjY0NjQiIHgyPSIxNS42NDY0IiB5Mj0iNS42NDY0NSIgc3Ryb2tlPSJibGFjayIvPgo8L3N2Zz4K" width={30} height={30} alt="close-icon" ></Image>
                </span>
            </div>
        </div>
        <div className="wb-body">
            qwd
        </div>
        {/* <div className="wb-n"></div>
        <div className="wb-s"></div>
        <div className="wb-w"></div>
        <div className="wb-e"></div>
        <div className="wb-nw"></div>
        <div className="wb-ne"></div>
        <div className="wb-se"></div>
        <div className="wb-sw"></div> */}
    </div>
        </Draggable>
        </div>

    </>
  );
}