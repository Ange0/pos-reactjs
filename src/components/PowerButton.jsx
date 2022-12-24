function PowerButton() {
    return (
        <>
            <div className="absolute top-16 hover:-left-40 hover:opacity-100 -left-4 w-full p-2 transition-all duration-500 -pointer opacity-0">
                <div className="flex space-x-2 items-center -pointer">
                  <span className="p-2 rounded-full bg-red-400/40 -pointer hover:bg-red-400/50">
                    <svg version="1.1"  width="512" height="512" x="0" y="0" viewBox="0 0 512 512" className="h-4 w-4">
                        <g>
                            <path d="m512 256c0 68.38-26.629 132.668-74.98 181.02s-112.64 74.98-181.02 74.98-132.668-26.629-181.02-74.98-74.98-112.64-74.98-181.02c0-100.905 59.559-192.698 151.731-233.854 8.068-3.604 17.531.018 21.133 8.086 3.604 8.069-.018 17.53-8.086 21.133-80.66 36.015-132.778 116.339-132.778 204.635 0 123.514 100.486 224 224 224s224-100.486 224-224c0-88.295-52.118-168.619-132.778-204.634-8.068-3.603-11.689-13.064-8.086-21.133s13.064-11.688 21.133-8.086c92.172 41.155 151.731 132.948 151.731 233.853zm-240-61.203v-178.797c0-8.836-7.163-16-16-16s-16 7.164-16 16v178.797c0 8.836 7.163 16 16 16s16-7.163 16-16z" fill="#eb4343" data-original="#000000" class="">
                            </path>
                        </g>
                    </svg>
                  </span>
                  <span className="text-red-500 -pointer">Switch off</span>
                </div>
            </div>
        </>
    );
}
export default PowerButton;