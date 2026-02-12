type LogoProps = {
    className?: string;
};

export default function Logo({ className }: LogoProps) {
    return (
        <svg
            viewBox="0 0 399 388"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Element 1: Inner line no. 1 */}
            <path
                d="M225 80V185.488L310 235"
                className="stroke-current"
                strokeWidth="25"
                strokeLinecap="round"
            />

            {/* Element 2: Inner line no. 2 */}
            <path
                d="M89 235C122.195 215.726 140.805 204.92 174 185.645V80"
                className="stroke-current"
                strokeWidth="25"
                strokeLinecap="round"
            />

            {/* Element 3: Accent line */}
            <path
                d="M283 274C250.196 255.255 231.804 244.745 199 226L115 274"
                stroke="#FF4D00"
                strokeWidth="25"
                strokeLinecap="round"
            />

            {/* Element 4: Hexagon */}
            <path
                d="M193.381 17.7705C197.181 15.637 201.819 15.637 205.619 17.7705L353.392 100.735C357.332 102.948 359.772 107.115 359.772 111.635V276.365C359.772 280.885 357.332 285.052 353.392 287.265L205.619 370.229C201.819 372.363 197.181 372.363 193.381 370.229L45.6084 287.265C41.6676 285.052 39.2276 280.885 39.2275 276.365V111.635C39.2275 107.115 41.6676 102.948 45.6084 100.735L193.381 17.7705Z"
                className="stroke-current"
                strokeWidth="25"
            />

        </svg>
    );
}
