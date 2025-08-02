interface Camera{
    cameraMode:string
    filter:string
    burst:number
}
class Istagram implements Camera{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}

}
interface StoryCount{
    storyCount():number
}
class Youtube implements Camera,StoryCount{
    public cameraMode: string;
    public filter: string;
    public burst:number;
    storyCount():number{
        return 8
    }
}