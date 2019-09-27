module.exports = {
	collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!**/node_modules/**",
		"!**/__snapshots__/**"
	],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	moduleNameMapper: {
		"^.+\\.(css|scss)$": "<rootDir>/src/test/styleMock.js"
	},
	roots: ["<rootDir>/src"],
	setupFilesAfterEnv: ["<rootDir>/src/test/setupEnzyme.ts"],
	snapshotSerializers: ["enzyme-to-json/serializer"],
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	}
}
