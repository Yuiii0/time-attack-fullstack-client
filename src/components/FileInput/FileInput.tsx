function FileInput() {
  return (
    <div>
      <label
        htmlFor="input-file"
        className="px-2 py-2  text-sm bg-white text-orange-400 border-orange-400 border rounded cursor-pointer transition  hover:bg-orange-400 hover:text-white "
      >
        사진 업로드
      </label>
      <input
        type="file"
        accept="image/*"
        id="input-file"
        className="hidden"
      ></input>
    </div>
  );
}

export default FileInput;
