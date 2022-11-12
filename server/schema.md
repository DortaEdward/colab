## User
  * [x] username string
  * [x] password string
  * [x] email string
  * [x] imageUrl string
  * [x] boards? Board[]
  * [x] lists? List[]
  * [x] comments? Comments[]
  * [x] createdAt
  * [x] updatedAt

## Board
* [x] id string @id uuid()
* [x] name string
* [x] background_image? string
* [x] owner User relation(fields:['ownerId], references:id)
* [x] ownerId string
* [x] members? User[]
* [x] lists? List[]
* [x] createdAt
* [x] updatedAt

## List
* [x] id string @id uuid()
* [x] name string
* [x] order number default(0)
* [x] archived boolean default(false)
* [x] board Board relation(fields:['boardId], references:id)
* [x] boardId string
* [x] creator User relation(field:['creatorId'], references:'id')
* [x] creatorId string
* [x] cards Card[]
* [x] createdAt
* [x] updatedAt

## Card
* [x] id @id string uuid()
* [x] title string
* [x] description string
* [x] order number default(0)
* [x] archived boolean default(false)
* [x] members User[]
* [x] createdAt
* [x] updatedAt 

## Comment
* [x] id @id string uuid()
* [x] content string
* [x] owner User relation(fields:['userId], references:id)
* [x] userID string
* [ ] replies? Comment[] || Need to figure this out
* [x] createdAt
* [x] updatedAt 