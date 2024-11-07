import { IRoute } from "../framework/interfaces/IRoute";
import { IRouterAdapter } from "../framework/interfaces/IRouterAdapter";
import { ClassesService } from "../services/ClassesService";

export class GetClassesRoute implements IRoute {
  private classesService: ClassesService;

  constructor() {
    this.classesService = new ClassesService();
  }

  register(router: IRouterAdapter): void {
    router.get("/api/classes/names", async (_, res) => {
      try {
        const classNames = await this.classesService.getClasses();
        res.status(200).json(classNames);
      } catch (error) {
        res.status(500).json({ message: error });
      }
    });

    router.get("/api/classes", async (_, res) => {
      try {
        const classes = await this.classesService.getAllClasses();
        res.status(200).json(classes);
      } catch (error) {
        res.status(500).json({ message: error });
      }
    });

    router.get("/api/classes/:index", async (req, res) => {
      const { index } = req.params;
      try {
        const classDetails = await this.classesService.getClassByIndex(index);
        res.status(200).json(classDetails);
      } catch (error) {
        res.status(500).json({ message: error });
      }
    });
  }
}
