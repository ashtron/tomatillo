# tomatillo

[Live link](http://miner-barnaby-21821.bitballoon.com/)

## Minimum Viable Product

tomatillo is an implementation of the [Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) time management method built on the MEAN stack. Features will include:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Adjustable time settings
- [ ] Interface for starting and stopping blocks of time (e.g. "work session," "short break," "long break")
- [ ] Notification when block is finished
- [ ] Schedule planner
  - [ ] Drag and drop interface
- [ ] Calendar storage to keep track of productivity
- [ ] Multiple color schemes

## Design Docs
* [View Wireframes][views]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Timer/Settings/Front End (2 - 3 days)

- [ ] Build out main timer functionality using Angular
  - [ ] Implement timer with UI to control time blocks
  - [ ] Implement menu
  - [ ] Implement settings (e.g. for custom times)
  - [ ] Implement notification system for when time blocks finish

### Phase 2: Schedule Planner (1 - 2 days)

- [ ] Build drag and drop interface for schedule planning:
  - [ ] ![Schedule planner interface](http://i.imgur.com/4DGkirY.png)
  
### Phase 3: Storing Progress (1 - 2 days)

- [ ] Allow users to describe what they did when a pomodoro finishes
  - [ ] Store descriptions in user calendar using the [FullCalendar](http://fullcalendar.io/) JavaScript plugin
  
### Phase 4: Bonus

- [ ] Adjustable color schemes