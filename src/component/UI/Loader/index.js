import "./loader.css"

export default function Loader() {
    return (
        <div class="wrapper">
            <div className="child_wrapper">
                <ul class="loader-list">
                    <li>
                        {/* <!-- Loader 5 --> */}
                        <div class="loader-5 center"><span></span><span></span><span></span></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}